import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.177.0/build/three.module.js";

const canvas = document.querySelector("#water-canvas");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const COLORS = {
  paper: 0xf5f3ed,
  ink: 0x172022,
  teal: 0x0d6a60,
  tealDark: 0x083f3a,
  gold: 0xbd8b2c,
  red: 0x9d3f35,
  blue: 0x315f85,
};

function clickedInteractiveSurface(target) {
  return Boolean(
    target.closest(
      [
        "a",
        "button",
        "summary",
        "input",
        "textarea",
        "select",
        "label",
        "iframe",
        ".site-header",
        ".project-card",
        ".research-focus-card",
        ".experience-card",
        ".ic-card",
        ".report-grid figure",
        ".life-grid figure",
        ".literature-gallery figure",
        ".contact-links",
        ".pdf-frame",
        "footer",
      ].join(","),
    ),
  );
}

function initKoiPond() {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (error) {
    return;
  }

  const isNarrow = window.innerWidth < 700;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();

  // gentle top-down view over the water plane (y = 0)
  const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 200);
  const cameraHome = new THREE.Vector3(0, 46, 9);
  const cameraTarget = new THREE.Vector3(0, 0, -1.5);
  camera.position.copy(cameraHome);
  camera.lookAt(cameraTarget);

  const clock = new THREE.Clock();
  const raycaster = new THREE.Raycaster();
  const waterPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const scratchNdc = new THREE.Vector2();
  const scratchVec = new THREE.Vector3();
  const parallax = { x: 0, y: 0, tx: 0, ty: 0 };
  const bounds = { minX: -24, maxX: 24, minZ: -16, maxZ: 16 };

  function ndcToWater(nx, ny, out) {
    scratchNdc.set(nx, ny);
    raycaster.setFromCamera(scratchNdc, camera);
    return raycaster.ray.intersectPlane(waterPlane, out);
  }

  function computeBounds() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    const corners = [
      [-1, 1],
      [1, 1],
      [-1, -1],
      [1, -1],
    ];
    let minX = Infinity;
    let maxX = -Infinity;
    let minZ = Infinity;
    let maxZ = -Infinity;
    corners.forEach(([nx, ny]) => {
      if (ndcToWater(nx, ny, scratchVec)) {
        minX = Math.min(minX, scratchVec.x);
        maxX = Math.max(maxX, scratchVec.x);
        minZ = Math.min(minZ, scratchVec.z);
        maxZ = Math.max(maxZ, scratchVec.z);
      }
    });
    if (Number.isFinite(minX)) {
      bounds.minX = minX + 2;
      bounds.maxX = maxX - 2;
      bounds.minZ = minZ + 2;
      bounds.maxZ = maxZ - 2;
    }
  }

  /* ---------- flat ribbon strokes (thick lines seen from above) ---------- */

  function createRibbon(pointCount, material, renderOrder) {
    const vertexCount = pointCount * 2;
    const positions = new Float32Array(vertexCount * 3);
    const indices = [];
    for (let i = 0; i < pointCount - 1; i += 1) {
      const a = i * 2;
      indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.frustumCulled = false;
    mesh.renderOrder = renderOrder;
    scene.add(mesh);

    const update = (points, widths, y) => {
      for (let i = 0; i < pointCount; i += 1) {
        const prev = points[Math.max(i - 1, 0)];
        const next = points[Math.min(i + 1, pointCount - 1)];
        let tx = next.x - prev.x;
        let tz = next.z - prev.z;
        const len = Math.hypot(tx, tz) || 1;
        tx /= len;
        tz /= len;
        const w = widths[i];
        const point = points[i];
        positions[i * 6] = point.x - tz * w;
        positions[i * 6 + 1] = y;
        positions[i * 6 + 2] = point.z + tx * w;
        positions[i * 6 + 3] = point.x + tz * w;
        positions[i * 6 + 4] = y;
        positions[i * 6 + 5] = point.z - tx * w;
      }
      geometry.attributes.position.needsUpdate = true;
    };
    return { mesh, update };
  }

  /* ---------- water current lines ---------- */

  const waveLines = [];
  const waveCount = isNarrow ? 12 : 20;
  const wavePointCount = isNarrow ? 60 : 90;
  const disturbances = [];

  for (let i = 0; i < waveCount; i += 1) {
    const z = THREE.MathUtils.lerp(-24, 24, i / (waveCount - 1));
    const xs = [];
    const positions = new Float32Array(wavePointCount * 3);
    for (let j = 0; j < wavePointCount; j += 1) {
      const x = THREE.MathUtils.lerp(-42, 42, j / (wavePointCount - 1));
      xs.push(x);
      positions[j * 3] = x;
      positions[j * 3 + 1] = 0;
      positions[j * 3 + 2] = z;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({
      color: COLORS.ink,
      transparent: true,
      opacity: i % 3 === 1 ? 0.07 : 0.11,
      depthWrite: false,
    });
    const line = new THREE.Line(geometry, material);
    line.renderOrder = 0;
    scene.add(line);
    waveLines.push({ line, xs, z, seed: Math.random() * 20 });
  }

  function disturbanceOffset(x, z, time) {
    let offset = 0;
    for (let i = 0; i < disturbances.length; i += 1) {
      const d = disturbances[i];
      const age = time - d.startedAt;
      if (age < 0 || age > d.life) {
        continue;
      }
      const r = Math.hypot(x - d.x, z - d.z) || 0.001;
      const front = 1 + age * 7;
      const envelope = Math.exp(-(((r - front) / 2.4) ** 2)) * (1 - age / d.life);
      offset += Math.sign(z - d.z) * envelope * d.amp;
    }
    return offset;
  }

  function updateWaves(time) {
    for (let i = disturbances.length - 1; i >= 0; i -= 1) {
      if (time - disturbances[i].startedAt > disturbances[i].life) {
        disturbances.splice(i, 1);
      }
    }
    waveLines.forEach((wave) => {
      const positions = wave.line.geometry.attributes.position;
      for (let j = 0; j < wave.xs.length; j += 1) {
        const x = wave.xs[j];
        const flow =
          Math.sin(x * 0.14 + time * 0.5 + wave.z * 0.5 + wave.seed) * 0.35 +
          Math.sin(x * 0.05 - time * 0.3 + wave.seed * 2.1) * 0.5;
        positions.setZ(j, wave.z + flow + disturbanceOffset(x, wave.z, time));
      }
      positions.needsUpdate = true;
    });
  }

  function addDisturbance(x, z, amp = 0.9) {
    disturbances.push({ x, z, amp, startedAt: clock.getElapsedTime(), life: 2.2 });
    while (disturbances.length > 8) {
      disturbances.shift();
    }
  }

  /* ---------- ripple rings ---------- */

  const rippleGeometry = new THREE.BufferGeometry().setFromPoints(
    Array.from({ length: 56 }, (_, i) => {
      const a = (i / 56) * Math.PI * 2;
      return new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    }),
  );
  const ripples = [];

  function addRippleRing(x, z, maxRadius, color, delay = 0, strength = 1) {
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false });
    const ring = new THREE.LineLoop(rippleGeometry, material);
    ring.renderOrder = 1;
    ring.position.set(x, 0.04, z);
    ring.scale.setScalar(0.01);
    scene.add(ring);
    ripples.push({
      ring,
      material,
      startedAt: clock.getElapsedTime() + delay,
      life: 1.7 + delay * 0.6,
      maxRadius,
      strength,
    });
  }

  function addRippleBurst(x, z, strength = 1) {
    addRippleRing(x, z, 5.2 * strength, COLORS.ink, 0, strength * 0.9);
    addRippleRing(x, z, 6.6 * strength, COLORS.ink, 0.14, strength * 0.6);
    addRippleRing(x, z, 4 * strength, COLORS.ink, 0.28, strength * 0.4);
    addDisturbance(x, z, 0.9 * strength);
  }

  function updateRipples(time) {
    for (let i = ripples.length - 1; i >= 0; i -= 1) {
      const ripple = ripples[i];
      const progress = (time - ripple.startedAt) / ripple.life;
      if (progress >= 1) {
        scene.remove(ripple.ring);
        ripple.material.dispose();
        ripples.splice(i, 1);
        continue;
      }
      if (progress < 0) {
        continue;
      }
      const eased = 1 - (1 - progress) ** 2;
      ripple.ring.scale.setScalar(0.01 + ripple.maxRadius * eased);
      ripple.material.opacity = 0.42 * ripple.strength * (1 - progress) ** 1.4;
    }
  }

  /* ---------- koi ---------- */

  const SPINE_COUNT = 12;
  const STREAMER_COUNT = 5;

  // ink-wash tones: from thick ink (濃墨) to diluted wash (淡墨)
  const koiConfigs = [
    { color: 0x1b2426, size: 1.0, opacity: 0.55 },
    { color: 0x2f3f43, size: 0.85, opacity: 0.46 },
    { color: 0x47585c, size: 0.74, opacity: 0.4 },
    { color: 0x1b2426, size: 0.62, opacity: 0.62 },
  ];
  if (isNarrow) {
    koiConfigs.pop();
  }

  // half-width of the body along the spine: round head, full belly, slim tail
  const widthProfile = [0.07, 0.3, 0.44, 0.5, 0.49, 0.43, 0.35, 0.26, 0.18, 0.11, 0.06, 0.025];

  function buildKoi(config, index) {
    const bodyMaterial = new THREE.MeshBasicMaterial({
      color: config.color,
      transparent: true,
      opacity: config.opacity,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const softMaterial = new THREE.MeshBasicMaterial({
      color: config.color,
      transparent: true,
      opacity: config.opacity * 0.62,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    const segLen = 0.62 * config.size;
    const spine = Array.from({ length: SPINE_COUNT }, (_, i) => new THREE.Vector3(i * -segLen, 0, index * 6 - 8));
    const streamers = [0].map((side) => ({
      side,
      nodes: Array.from({ length: STREAMER_COUNT }, () => new THREE.Vector3()),
    }));
    streamers.forEach((streamer) => {
      streamer.nodes.forEach((node, i) => {
        node.copy(spine[SPINE_COUNT - 1]);
        node.x -= i * segLen * 0.5;
      });
    });

    // solid ink-wash body: a filled ribbon whose width follows the body profile
    const body = createRibbon(SPINE_COUNT, bodyMaterial, 3);
    const streamerRibbons = streamers.map(() => createRibbon(STREAMER_COUNT, softMaterial, 2));
    const fins = [-1, 1].map(() => createRibbon(3, softMaterial, 2));

    const hitProxy = new THREE.Mesh(
      new THREE.SphereGeometry(2.1 * config.size, 8, 6),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
    );
    scene.add(hitProxy);

    return {
      config,
      segLen,
      spine,
      streamers,
      body,
      bodyWidths: widthProfile.map((w) => w * config.size),
      streamerRibbons,
      fins,
      hitProxy,
      x: spine[0].x,
      z: spine[0].z,
      heading: Math.random() * Math.PI * 2,
      speed: 1.5 + Math.random() * 0.9,
      bias: (Math.random() - 0.5) * 0.3,
      wanderFreq: 0.22 + Math.random() * 0.2,
      wanderFreq2: 0.09 + Math.random() * 0.09,
      boost: 0,
      phase: Math.random() * Math.PI * 2,
      seed: index * 3.7 + Math.random() * 5,
      finPoints: Array.from({ length: 3 }, () => new THREE.Vector3()),
      normals: Array.from({ length: SPINE_COUNT }, () => ({ x: 0, z: 0 })),
      swayed: Array.from({ length: SPINE_COUNT }, () => new THREE.Vector3()),
    };
  }

  const koi = koiConfigs.map((config, index) => buildKoi(config, index));

  function wrapAngle(a) {
    return Math.atan2(Math.sin(a), Math.cos(a));
  }

  function steerKoi(fish, time, delta) {
    // each fish wanders on its own rhythm — no pointer following
    let torque =
      fish.bias +
      Math.sin(time * fish.wanderFreq + fish.seed) * 0.55 +
      Math.sin(time * fish.wanderFreq2 + fish.seed * 1.7) * 0.3;

    koi.forEach((other) => {
      if (other === fish) {
        return;
      }
      const dx = fish.x - other.x;
      const dz = fish.z - other.z;
      const distance = Math.hypot(dx, dz);
      const comfort = 2.6 * (fish.config.size + other.config.size) * 0.5;
      if (distance < comfort && distance > 0.001) {
        torque += wrapAngle(Math.atan2(dz, dx) - fish.heading) * ((comfort - distance) / comfort) * 1.4;
      }
    });

    // start turning back before reaching the edge
    const soft = 3.5;
    let pushX = 0;
    let pushZ = 0;
    if (fish.x < bounds.minX + soft) {
      pushX = bounds.minX + soft - fish.x;
    } else if (fish.x > bounds.maxX - soft) {
      pushX = bounds.maxX - soft - fish.x;
    }
    if (fish.z < bounds.minZ + soft) {
      pushZ = bounds.minZ + soft - fish.z;
    } else if (fish.z > bounds.maxZ - soft) {
      pushZ = bounds.maxZ - soft - fish.z;
    }
    if (pushX !== 0 || pushZ !== 0) {
      const urgency = 1.2 + Math.hypot(pushX, pushZ) * 0.8;
      torque += wrapAngle(Math.atan2(pushZ, pushX) - fish.heading) * urgency;
    }

    const maxTurn = (1.4 + fish.boost * 2.5) * delta;
    fish.heading += THREE.MathUtils.clamp(torque * delta, -maxTurn, maxTurn);
  }

  function clampToBounds(fish) {
    // hard safety net: reflect at the edge so no fish ever leaves the screen
    if (fish.x < bounds.minX) {
      fish.x = bounds.minX;
      if (Math.cos(fish.heading) < 0) {
        fish.heading = Math.PI - fish.heading;
      }
    } else if (fish.x > bounds.maxX) {
      fish.x = bounds.maxX;
      if (Math.cos(fish.heading) > 0) {
        fish.heading = Math.PI - fish.heading;
      }
    }
    if (fish.z < bounds.minZ) {
      fish.z = bounds.minZ;
      if (Math.sin(fish.heading) < 0) {
        fish.heading = -fish.heading;
      }
    } else if (fish.z > bounds.maxZ) {
      fish.z = bounds.maxZ;
      if (Math.sin(fish.heading) > 0) {
        fish.heading = -fish.heading;
      }
    }
  }

  function updateKoi(fish, time, delta) {
    steerKoi(fish, time, delta);

    fish.boost *= Math.exp(-delta * 2.1);
    const speed = fish.speed * (1 + Math.sin(time * 0.22 + fish.seed) * 0.22) + fish.boost * 6;
    fish.x += Math.cos(fish.heading) * speed * delta;
    fish.z += Math.sin(fish.heading) * speed * delta;
    clampToBounds(fish);
    fish.phase += delta * (2.4 + speed * 0.9);

    // follow-the-leader spine
    const spine = fish.spine;
    spine[0].set(fish.x, 0, fish.z);
    for (let i = 1; i < SPINE_COUNT; i += 1) {
      const dx = spine[i - 1].x - spine[i].x;
      const dz = spine[i - 1].z - spine[i].z;
      const distance = Math.hypot(dx, dz) || 0.0001;
      spine[i].x = spine[i - 1].x - (dx / distance) * fish.segLen;
      spine[i].z = spine[i - 1].z - (dz / distance) * fish.segLen;
    }

    // swim wave: lateral sway grows toward the tail, stronger when fast
    const swayAmp = (0.08 + Math.min(speed * 0.035, 0.16)) * fish.config.size;
    for (let i = 0; i < SPINE_COUNT; i += 1) {
      const prev = spine[Math.max(i - 1, 0)];
      const next = spine[Math.min(i + 1, SPINE_COUNT - 1)];
      let tx = next.x - prev.x;
      let tz = next.z - prev.z;
      const len = Math.hypot(tx, tz) || 1;
      tx /= len;
      tz /= len;
      fish.normals[i].x = -tz;
      fish.normals[i].z = tx;
      const sway = Math.sin(fish.phase - i * 0.55) * swayAmp * (i / SPINE_COUNT);
      fish.swayed[i].set(spine[i].x + fish.normals[i].x * sway, 0, spine[i].z + fish.normals[i].z * sway);
    }

    // solid ink body follows the swaying spine
    const size = fish.config.size;
    fish.body.update(fish.swayed, fish.bodyWidths, 0.12);

    // single fan-shaped caudal fin trailing the spine
    fish.streamers.forEach((streamer, sIndex) => {
      const anchor = fish.swayed[SPINE_COUNT - 1];
      streamer.nodes[0].set(anchor.x, 0, anchor.z);
      const streamSeg = fish.segLen * 0.48;
      for (let i = 1; i < STREAMER_COUNT; i += 1) {
        const prev = streamer.nodes[i - 1];
        const node = streamer.nodes[i];
        const dx = prev.x - node.x;
        const dz = prev.z - node.z;
        const distance = Math.hypot(dx, dz) || 0.0001;
        node.x = prev.x - (dx / distance) * streamSeg;
        node.z = prev.z - (dz / distance) * streamSeg;
        const flutter = Math.sin(fish.phase - (SPINE_COUNT + i) * 0.55) * 0.04 * size * (i / STREAMER_COUNT);
        node.x += (-dz / distance) * flutter;
        node.z += (dx / distance) * flutter;
      }
      fish.streamerRibbons[sIndex].update(streamer.nodes, streamerWidths(size), 0.1);
    });

    // pectoral fins flutter near the head
    const finBase = fish.swayed[3];
    const finNormal = fish.normals[3];
    const finTangent = { x: -finNormal.z, z: finNormal.x };
    const flutter = 0.55 + Math.sin(fish.phase + 1.3) * 0.18;
    [-1, 1].forEach((side, fIndex) => {
      const w = widthProfile[3] * size;
      fish.finPoints[0].set(finBase.x + finNormal.x * side * w * 0.85, 0, finBase.z + finNormal.z * side * w * 0.85);
      fish.finPoints[1].set(
        fish.finPoints[0].x + finNormal.x * side * 0.42 * size * flutter - finTangent.x * 0.3 * size,
        0,
        fish.finPoints[0].z + finNormal.z * side * 0.42 * size * flutter - finTangent.z * 0.3 * size,
      );
      fish.finPoints[2].set(
        fish.finPoints[0].x + finNormal.x * side * 0.6 * size * flutter - finTangent.x * 0.72 * size,
        0,
        fish.finPoints[0].z + finNormal.z * side * 0.6 * size * flutter - finTangent.z * 0.72 * size,
      );
      fish.fins[fIndex].update(fish.finPoints, finWidths(size), 0.11);
    });

    fish.hitProxy.position.set(fish.swayed[3].x, 0, fish.swayed[3].z);

    // faint wake while darting
    if (fish.boost > 0.35) {
      fish.wakeTimer = (fish.wakeTimer || 0) + delta;
      if (fish.wakeTimer > 0.22) {
        fish.wakeTimer = 0;
        addRippleRing(fish.x, fish.z, 1.6 * fish.config.size, COLORS.ink, 0, 0.45);
      }
    }
  }

  // narrow peduncle opening into a soft fan
  const streamerProfile = [0.04, 0.1, 0.17, 0.21, 0.09];
  function streamerWidths(size) {
    return streamerWidthCache[size] || (streamerWidthCache[size] = streamerProfile.map((w) => w * size));
  }
  const streamerWidthCache = {};
  function finWidths(size) {
    return finWidthCache[size] || (finWidthCache[size] = [0.055 * size, 0.04 * size, 0.012 * size]);
  }
  const finWidthCache = {};

  /* ---------- interaction ---------- */

  document.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || reduceMotion.matches || clickedInteractiveSurface(event.target)) {
      return;
    }
    const nx = (event.clientX / window.innerWidth) * 2 - 1;
    const ny = -(event.clientY / window.innerHeight) * 2 + 1;
    scratchNdc.set(nx, ny);
    raycaster.setFromCamera(scratchNdc, camera);

    const hits = raycaster.intersectObjects(
      koi.map((fish) => fish.hitProxy),
      false,
    );
    const clicked = ndcToWater(nx, ny, scratchVec) ? { x: scratchVec.x, z: scratchVec.z } : null;

    if (hits.length > 0) {
      const fish = koi.find((entry) => entry.hitProxy === hits[0].object);
      if (fish && clicked) {
        fish.heading = Math.atan2(fish.z - clicked.z, fish.x - clicked.x) + (Math.random() - 0.5) * 0.5;
        fish.boost = 1;
        addRippleBurst(fish.x, fish.z, 1.25);
        return;
      }
    }
    if (clicked) {
      addRippleBurst(clicked.x, clicked.z, 1);
    }
  });

  window.addEventListener(
    "pointermove",
    (event) => {
      parallax.tx = (event.clientX / window.innerWidth - 0.5) * 2;
      parallax.ty = (event.clientY / window.innerHeight - 0.5) * 2;
      document.body.classList.toggle("paw-cursor", !clickedInteractiveSurface(event.target));
    },
    { passive: true },
  );

  /* ---------- render loop ---------- */

  let animationId = 0;
  let running = false;
  let viewportW = 0;
  let viewportH = 0;

  function syncViewport() {
    if (window.innerWidth === viewportW && window.innerHeight === viewportH) {
      return;
    }
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;
    renderer.setSize(viewportW, viewportH);
    computeBounds();
  }

  function renderFrame() {
    syncViewport();
    const delta = THREE.MathUtils.clamp(clock.getDelta(), 0, 0.05);
    const time = clock.getElapsedTime();

    parallax.x += (parallax.tx - parallax.x) * 0.035;
    parallax.y += (parallax.ty - parallax.y) * 0.035;
    camera.position.set(cameraHome.x + parallax.x * 1.6, cameraHome.y, cameraHome.z + parallax.y * 1.2);
    camera.lookAt(cameraTarget);

    updateWaves(time);
    updateRipples(time);
    koi.forEach((fish) => updateKoi(fish, time, delta));

    renderer.render(scene, camera);
    if (running && !reduceMotion.matches) {
      animationId = window.requestAnimationFrame(renderFrame);
    }
  }

  function start() {
    if (running) {
      return;
    }
    running = true;
    clock.getDelta();
    animationId = window.requestAnimationFrame(renderFrame);
  }

  function stop() {
    running = false;
    window.cancelAnimationFrame(animationId);
  }

  window.addEventListener("resize", () => {
    if (reduceMotion.matches) {
      renderFrame();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  const onMotionPreferenceChange = () => {
    if (reduceMotion.matches) {
      stop();
      renderFrame();
    } else {
      start();
    }
  };
  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", onMotionPreferenceChange);
  } else {
    reduceMotion.addListener(onMotionPreferenceChange);
  }

  computeBounds();
  if (reduceMotion.matches) {
    running = false;
    renderFrame();
  } else {
    start();
  }
}

if (canvas) {
  try {
    initKoiPond();
  } catch (error) {
    console.warn("3D background disabled:", error);
  }
}
