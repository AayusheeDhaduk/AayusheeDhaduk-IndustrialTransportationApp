"use strict";

document.documentElement.classList.add("js");

const fleetShipments = [
  {
    id: "IND-1025",
    cargo: "Heavy Industrial Press",
    origin: "Ahmedabad",
    destination: "Surat",
    location: "Bharuch (NH-48 Bypass)",
    status: "In Transit",
    eta: "14 Oct 2026, 17:30 IST",
    shortEta: "14 Oct",
    vehicle: "TR-24 (12-Axle Lowbed)",
    driver: "Rajesh Patel",
    driverPhone: "+91 98250 11025",
    progress: 68,
    speed: "62 km/h",
    loadClass: "74 Metric Tons",
    temperature: "24°C (Normal)",
    geofence: "Locked (Corridor NH-48)",
    note: "Consignment cleared through Bharuch tollway. Satellite telemetry normal; proceeding toward Hazira Heavy Engineering Zone."
  },
  {
    id: "IND-1026",
    cargo: "CNC 5-Axis Milling Unit",
    origin: "Vadodara",
    destination: "Mumbai",
    location: "Mumbai (MIDC Terminal)",
    status: "Delivered",
    eta: "13 Oct 2026, 11:15 IST",
    shortEta: "13 Oct",
    vehicle: "TR-18 (Air-Ride Semi)",
    driver: "Amit Shah",
    driverPhone: "+91 98250 11018",
    progress: 100,
    speed: "0 km/h (Docked)",
    loadClass: "26 Metric Tons",
    temperature: "21°C (Controlled)",
    geofence: "Terminal Gate Cleared",
    note: "Delivery successfully completed at MIDC Industrial Estate. Commercial e-Waybill and electronic receiving signature verified."
  },
  {
    id: "IND-1027",
    cargo: "Structural Bridge Girders",
    origin: "Surat",
    destination: "Rajkot",
    location: "Limbdi Highway Corridor",
    status: "Delayed",
    eta: "15 Oct 2026, 09:00 IST",
    shortEta: "15 Oct",
    vehicle: "TR-31 (Modular Multiaxle)",
    driver: "Vijay Solanki",
    driverPhone: "+91 98250 11031",
    progress: 45,
    speed: "35 km/h",
    loadClass: "92 Metric Tons",
    temperature: "28°C (Ambient)",
    geofence: "Pilot Escort Active",
    note: "Speed restricted near Limbdi due to wide-load highway pilot convoy protocol. Revised delivery window synchronized with site crane team."
  },
  {
    id: "IND-1028",
    cargo: "Gas Turbine Generator",
    origin: "Ahmedabad",
    destination: "Bharuch",
    location: "Vadodara Central Depot",
    status: "In Transit",
    eta: "14 Oct 2026, 15:45 IST",
    shortEta: "14 Oct",
    vehicle: "TR-12 (Hydraulic Axles)",
    driver: "Sanjay Desai",
    driverPhone: "+91 98250 11012",
    progress: 58,
    speed: "58 km/h",
    loadClass: "48 Metric Tons",
    temperature: "23°C (Normal)",
    geofence: "Locked (Corridor NH-48)",
    note: "Consignment cleared through Vadodara bypass, continuing south toward Dahej / Bharuch staging terminal."
  },
  {
    id: "IND-1029",
    cargo: "Excavator CAT 349D",
    origin: "Sanand",
    destination: "Hazira Port",
    location: "Ankleshwar Industrial Link",
    status: "In Transit",
    eta: "14 Oct 2026, 20:00 IST",
    shortEta: "14 Oct",
    vehicle: "TR-07 (8-Axle Hydraulic)",
    driver: "Manoj Kumar",
    driverPhone: "+91 98250 11007",
    progress: 72,
    speed: "52 km/h",
    loadClass: "54 Metric Tons",
    temperature: "26°C (Ambient)",
    geofence: "Locked (Corridor NH-48)",
    note: "Heavy crawler excavator transit on schedule. Bridge load verification clearance confirmed for Narmada crossing."
  },
  {
    id: "IND-1030",
    cargo: "Transformer 315 MVA",
    origin: "Vadodara",
    destination: "Pune",
    location: "Thane Bhiwandi Bypass",
    status: "In Transit",
    eta: "15 Oct 2026, 14:30 IST",
    shortEta: "15 Oct",
    vehicle: "TR-42 (16-Axle Modular)",
    driver: "Kishore Parmar",
    driverPhone: "+91 98250 11042",
    progress: 60,
    speed: "40 km/h",
    loadClass: "115 Metric Tons",
    temperature: "22°C (Monitored)",
    geofence: "Pilot Escort Active",
    note: "Ultra-heavy power transformer haul moving under state highway police pilot escort through Western Ghats."
  },
  {
    id: "IND-1031",
    cargo: "High-Pressure Reactor",
    origin: "Hazira",
    destination: "Jamnagar",
    location: "Chotila Express Route",
    status: "In Transit",
    eta: "16 Oct 2026, 12:00 IST",
    shortEta: "16 Oct",
    vehicle: "TR-19 (14-Axle Modular)",
    driver: "Devendra Rathore",
    driverPhone: "+91 98250 11019",
    progress: 42,
    speed: "38 km/h",
    loadClass: "98 Metric Tons",
    temperature: "25°C (Normal)",
    geofence: "Locked (Corridor NH-27)",
    note: "Petrochemical reactor transit progressing through Saurashtra corridor under day-transit permit rules."
  },
  {
    id: "IND-1032",
    cargo: "Precision Laser Cutting Bed",
    origin: "Pune",
    destination: "Ahmedabad",
    location: "Ahmedabad (Naroda)",
    status: "Delivered",
    eta: "13 Oct 2026, 16:45 IST",
    shortEta: "13 Oct",
    vehicle: "TR-05 (Air-Ride Closed)",
    driver: "Gopal Joshi",
    driverPhone: "+91 98250 11005",
    progress: 100,
    speed: "0 km/h (Docked)",
    loadClass: "18 Metric Tons",
    temperature: "20°C (Climate-Controlled)",
    geofence: "Terminal Gate Cleared",
    note: "Cleanroom unloading completed. Shock-recorder telemetry log exported with zero vibration threshold exceeded."
  },
  {
    id: "IND-1033",
    cargo: "Wind Turbine Rotor Blades",
    origin: "Halol",
    destination: "Mundra Port",
    location: "Radhanpur Crossing",
    status: "Delayed",
    eta: "16 Oct 2026, 18:00 IST",
    shortEta: "16 Oct",
    vehicle: "TR-55 (Extendable Semi)",
    driver: "Harish Zala",
    driverPhone: "+91 98250 11055",
    progress: 35,
    speed: "30 km/h",
    loadClass: "38 Metric Tons",
    temperature: "29°C (Ambient)",
    geofence: "Advisory: High Crosswind",
    note: "Over-length 68-meter blade carrier holding briefly at designated bay awaiting night crosswind reduction."
  },
  {
    id: "IND-1034",
    cargo: "Cement Kiln Shell Sections",
    origin: "Surat",
    destination: "Nagpur",
    location: "Jalgaon Highway",
    status: "In Transit",
    eta: "15 Oct 2026, 19:30 IST",
    shortEta: "15 Oct",
    vehicle: "TR-28 (10-Axle Lowbed)",
    driver: "Pradeep Shinde",
    driverPhone: "+91 98250 11028",
    progress: 55,
    speed: "46 km/h",
    loadClass: "68 Metric Tons",
    temperature: "27°C (Ambient)",
    geofence: "Locked (Corridor NH-53)",
    note: "Industrial kiln movement passing Jalgaon district with valid inter-state commercial transport clearance."
  },
  {
    id: "IND-1035",
    cargo: "Substation Switchgear Panels",
    origin: "Vadodara",
    destination: "Navi Mumbai",
    location: "Navi Mumbai (JNPT)",
    status: "Delivered",
    eta: "13 Oct 2026, 18:20 IST",
    shortEta: "13 Oct",
    vehicle: "TR-14 (Air-Ride Closed)",
    driver: "Sunil Waghela",
    driverPhone: "+91 98250 11014",
    progress: 100,
    speed: "0 km/h (Docked)",
    loadClass: "24 Metric Tons",
    temperature: "22°C (Controlled)",
    geofence: "Terminal Gate Cleared",
    note: "Project shipment received at JNPT Port staging area for marine export containerization."
  },
  {
    id: "IND-1036",
    cargo: "Forging Hammer Assembly",
    origin: "Rajkot",
    destination: "Surat",
    location: "Tarapur Highway Junction",
    status: "In Transit",
    eta: "14 Oct 2026, 22:15 IST",
    shortEta: "14 Oct",
    vehicle: "TR-36 (12-Axle Lowbed)",
    driver: "Bhavesh Makwana",
    driverPhone: "+91 98250 11036",
    progress: 64,
    speed: "50 km/h",
    loadClass: "82 Metric Tons",
    temperature: "26°C (Ambient)",
    geofence: "Locked (Western Belt)",
    note: "High-tonnage die hammer component en route to Hazira forge plant. Transit telemetry operating normally."
  }
];

const shipments = fleetShipments;
const commercialEnquiries = [];

const statusClass = (status) => status.toLowerCase().replaceAll(" ", "-");

function badge(status) {
  const displayLabel = status === "Delayed" ? "Regulated Transit" : status;
  return `<span class="badge ${statusClass(status)}">${displayLabel}</span>`;
}

const toastContainer = document.querySelector("#toast-container");

function showToast(message, duration = 3200) {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="pulse-beacon"></span>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-leave");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function initHeroLogisticsCanvas() {
  const canvas = document.querySelector("#hero-logistics-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let animationFrameId = null;
  let isVisible = true;

  const mouse = { x: -1000, y: -1000, radius: 170, active: false };

  const heroSection = document.querySelector("#home");
  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });
    heroSection.addEventListener("mouseleave", () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    });
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  const regionalHubs = [
    { name: "PORBANDAR HQ", code: "PBR-01", rx: 0.14, ry: 0.62, isBase: true },
    { name: "RAJKOT CORRIDOR", code: "RAJ-04", rx: 0.28, ry: 0.40, isBase: false },
    { name: "AHMEDABAD HUB", code: "AMD-01", rx: 0.48, ry: 0.24, isBase: true },
    { name: "VADODARA DEPOT", code: "BDQ-02", rx: 0.60, ry: 0.44, isBase: false },
    { name: "BHARUCH BYPASS", code: "BH-03", rx: 0.68, ry: 0.58, isBase: false },
    { name: "SURAT HAZIRA", code: "ST-01", rx: 0.78, ry: 0.70, isBase: true },
    { name: "MUMBAI GATEWAY", code: "BOM-09", rx: 0.88, ry: 0.84, isBase: true }
  ];

  const corridorLinks = [
    [0, 1], // Porbandar <-> Rajkot
    [1, 2], // Rajkot <-> Ahmedabad
    [2, 3], // Ahmedabad <-> Vadodara
    [3, 4], // Vadodara <-> Bharuch
    [4, 5], // Bharuch <-> Surat
    [5, 6], // Surat <-> Mumbai
    [0, 5]  // Porbandar <-> Surat (Coastal Link)
  ];

  const ambientNodes = [];
  const ambientCount = 14;
  for (let i = 0; i < ambientCount; i++) {
    ambientNodes.push({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      radius: Math.random() * 1.5 + 1
    });
  }

  const packets = [];
  function createPacket() {
    if (corridorLinks.length === 0) return;
    const link = corridorLinks[Math.floor(Math.random() * corridorLinks.length)];
    const reverse = Math.random() > 0.5;
    packets.push({
      from: reverse ? link[1] : link[0],
      to: reverse ? link[0] : link[1],
      progress: 0,
      speed: 0.005 + Math.random() * 0.008,
      color: Math.random() > 0.35 ? "#28d7ba" : "#7155ed"
    });
  }

  for (let i = 0; i < 8; i++) {
    createPacket();
    if (packets[i]) packets[i].progress = Math.random();
  }

  let radarRingRadius = 0;

  function render() {
    if (!isVisible) {
      animationFrameId = requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    if (mouse.active) {
      const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
      grad.addColorStop(0, "rgba(40, 215, 186, 0.12)");
      grad.addColorStop(0.5, "rgba(113, 85, 237, 0.06)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    const hubPixels = regionalHubs.map((hub) => {
      let px = hub.rx * width;
      let py = hub.ry * height;

      if (mouse.active) {
        const dx = mouse.x - px;
        const dy = mouse.y - py;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius && dist > 1) {
          const pull = (1 - dist / mouse.radius) * 14;
          px += (dx / dist) * pull;
          py += (dy / dist) * pull;
        }
      }

      return { ...hub, px, py };
    });

    corridorLinks.forEach(([fromIdx, toIdx]) => {
      const hA = hubPixels[fromIdx];
      const hB = hubPixels[toIdx];
      if (!hA || !hB) return;

      const isCoastal = (fromIdx === 0 && toIdx === 5) || (fromIdx === 5 && toIdx === 0);

      ctx.beginPath();
      ctx.moveTo(hA.px, hA.py);
      ctx.lineTo(hB.px, hB.py);

      if (isCoastal) {
        ctx.setLineDash([6, 6]);
        ctx.strokeStyle = "rgba(40, 215, 186, 0.24)";
        ctx.lineWidth = 1.2;
      } else {
        ctx.setLineDash([]);
        const lineGrad = ctx.createLinearGradient(hA.px, hA.py, hB.px, hB.py);
        lineGrad.addColorStop(0, "rgba(113, 85, 237, 0.35)");
        lineGrad.addColorStop(0.5, "rgba(40, 215, 186, 0.45)");
        lineGrad.addColorStop(1, "rgba(113, 85, 237, 0.35)");
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.5;
      }
      ctx.stroke();
      ctx.setLineDash([]);
    });

    ambientNodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0 || node.x > 1) node.vx *= -1;
      if (node.y < 0 || node.y > 1) node.vy *= -1;

      const px = node.x * width;
      const py = node.y * height;

      ctx.beginPath();
      ctx.arc(px, py, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(180, 175, 220, 0.35)";
      ctx.fill();

      if (mouse.active) {
        const dist = Math.hypot(mouse.x - px, mouse.y - py);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(40, 215, 186, ${(1 - dist / 110) * 0.25})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    });

    for (let i = packets.length - 1; i >= 0; i--) {
      const pkt = packets[i];
      pkt.progress += pkt.speed;

      const hA = hubPixels[pkt.from];
      const hB = hubPixels[pkt.to];

      if (hA && hB) {
        const cx = hA.px + (hB.px - hA.px) * pkt.progress;
        const cy = hA.py + (hB.py - hA.py) * pkt.progress;

        ctx.beginPath();
        ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        const trailX = hA.px + (hB.px - hA.px) * Math.max(0, pkt.progress - 0.05);
        const trailY = hA.py + (hB.py - hA.py) * Math.max(0, pkt.progress - 0.05);
        ctx.beginPath();
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = pkt.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      if (pkt.progress >= 1) {
        packets.splice(i, 1);
        createPacket();
      }
    }

    radarRingRadius = (radarRingRadius + 0.35) % 45;
    const ringAlpha = Math.max(0, 1 - radarRingRadius / 45) * 0.6;

    hubPixels.forEach((hub) => {
      if (hub.isBase) {
        ctx.beginPath();
        ctx.arc(hub.px, hub.py, radarRingRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(40, 215, 186, ${ringAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(hub.px, hub.py, Math.max(2, radarRingRadius * 0.5), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(113, 85, 237, ${ringAlpha * 0.7})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(hub.px, hub.py, hub.isBase ? 5.5 : 3.8, 0, Math.PI * 2);
      ctx.fillStyle = hub.isBase ? "#28d7ba" : "#7155ed";
      ctx.shadowColor = hub.isBase ? "rgba(40, 215, 186, 0.9)" : "rgba(113, 85, 237, 0.8)";
      ctx.shadowBlur = hub.isBase ? 10 : 5;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.beginPath();
      ctx.arc(hub.px, hub.py, hub.isBase ? 2.2 : 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      if (width >= 768) {
        ctx.font = hub.isBase ? "600 10px Inter, system-ui, sans-serif" : "500 9px Inter, system-ui, sans-serif";
        ctx.fillStyle = hub.isBase ? "#28d7ba" : "rgba(226, 223, 255, 0.85)";
        ctx.fillText(hub.name, hub.px + 10, hub.py - 6);

        ctx.font = "400 8px Inter, monospace";
        ctx.fillStyle = "rgba(180, 175, 220, 0.55)";
        ctx.fillText(hub.code, hub.px + 10, hub.py + 6);
      }
    });

    animationFrameId = requestAnimationFrame(render);
  }

  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
  }, { threshold: 0.05 });

  if (heroSection) observer.observe(heroSection);

  window.addEventListener("resize", resizeCanvas, { passive: true });
  resizeCanvas();
  render();
}

function initCustomDropdowns() {
  const wrappers = document.querySelectorAll("[data-custom-select]");

  wrappers.forEach((wrapper) => {
    const select = wrapper.querySelector("select");
    if (!select) return;

    wrapper.classList.add("has-custom");

    const oldTrigger = wrapper.querySelector(".custom-dropdown-trigger");
    const oldPanel = wrapper.querySelector(".custom-dropdown-panel");
    if (oldTrigger) oldTrigger.remove();
    if (oldPanel) oldPanel.remove();

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "custom-dropdown-trigger";
    trigger.id = `${select.id}-trigger`;
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    const labelSpan = document.createElement("span");
    labelSpan.className = "trigger-label";
    const selectedOpt = select.options[select.selectedIndex] || select.options[0];
    labelSpan.textContent = selectedOpt ? selectedOpt.textContent : "Select option";

    const arrowSpan = document.createElement("span");
    arrowSpan.className = "arrow-icon";
    arrowSpan.setAttribute("aria-hidden", "true");
    arrowSpan.innerHTML = "&#9662;";

    trigger.appendChild(labelSpan);
    trigger.appendChild(arrowSpan);

    const panel = document.createElement("div");
    panel.className = "custom-dropdown-panel";
    panel.id = `${select.id}-panel`;
    panel.setAttribute("role", "listbox");
    panel.setAttribute("aria-labelledby", trigger.id);

    function buildOptions() {
      panel.innerHTML = "";
      [...select.options].forEach((option) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "custom-option-item";
        item.setAttribute("role", "option");
        item.setAttribute("data-value", option.value);

        if (option.value === select.value) {
          item.classList.add("selected");
          item.setAttribute("aria-selected", "true");
        } else {
          item.setAttribute("aria-selected", "false");
        }

        const itemText = document.createElement("span");
        itemText.textContent = option.textContent;
        item.appendChild(itemText);

        item.addEventListener("click", (e) => {
          e.stopPropagation();
          select.value = option.value;
          labelSpan.textContent = option.textContent;
          trigger.removeAttribute("aria-invalid");
          select.removeAttribute("aria-invalid");

          panel.querySelectorAll(".custom-option-item").forEach((el) => {
            const isMatch = el.getAttribute("data-value") === option.value;
            el.classList.toggle("selected", isMatch);
            el.setAttribute("aria-selected", String(isMatch));
          });

          closeDropdown();
          trigger.focus();

          select.dispatchEvent(new Event("change", { bubbles: true }));
          select.dispatchEvent(new Event("input", { bubbles: true }));
        });

        panel.appendChild(item);
      });
    }

    buildOptions();

    function openDropdown() {
      document.querySelectorAll(".custom-dropdown-panel.open").forEach((p) => {
        if (p !== panel) {
          p.classList.remove("open");
          const trg = p.previousElementSibling;
          if (trg && trg.classList.contains("custom-dropdown-trigger")) {
            trg.classList.remove("open");
            trg.setAttribute("aria-expanded", "false");
          }
        }
      });

      panel.classList.add("open");
      trigger.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");

      const selectedItem = panel.querySelector(".custom-option-item.selected");
      if (selectedItem) selectedItem.focus();
    }

    function closeDropdown() {
      panel.classList.remove("open");
      trigger.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    }

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (panel.classList.contains("open")) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    trigger.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDropdown();
      } else if (e.key === "Escape") {
        closeDropdown();
      }
    });

    panel.addEventListener("keydown", (e) => {
      const items = [...panel.querySelectorAll(".custom-option-item")];
      const currentIndex = items.indexOf(document.activeElement);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = (currentIndex + 1) % items.length;
        items[next].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev = (currentIndex - 1 + items.length) % items.length;
        items[prev].focus();
      } else if (e.key === "Escape") {
        closeDropdown();
        trigger.focus();
      }
    });

    function syncFromSelect() {
      const currentOpt = select.options[select.selectedIndex];
      if (currentOpt) {
        labelSpan.textContent = currentOpt.textContent;
      }
      panel.querySelectorAll(".custom-option-item").forEach((el) => {
        const isMatch = el.getAttribute("data-value") === select.value;
        el.classList.toggle("selected", isMatch);
        el.setAttribute("aria-selected", String(isMatch));
      });
      if (select.getAttribute("aria-invalid") === "true") {
        trigger.setAttribute("aria-invalid", "true");
      } else {
        trigger.removeAttribute("aria-invalid");
      }
    }

    select.addEventListener("change", syncFromSelect);

    const form = select.closest("form");
    if (form) {
      form.addEventListener("reset", () => {
        setTimeout(syncFromSelect, 30);
      });
    }

    wrapper.appendChild(trigger);
    wrapper.appendChild(panel);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select-wrapper")) {
      document.querySelectorAll(".custom-dropdown-panel.open").forEach((p) => {
        p.classList.remove("open");
        const trg = p.previousElementSibling;
        if (trg && trg.classList.contains("custom-dropdown-trigger")) {
          trg.classList.remove("open");
          trg.setAttribute("aria-expanded", "false");
        }
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".custom-dropdown-panel.open").forEach((p) => {
        p.classList.remove("open");
        const trg = p.previousElementSibling;
        if (trg && trg.classList.contains("custom-dropdown-trigger")) {
          trg.classList.remove("open");
          trg.setAttribute("aria-expanded", "false");
        }
      });
    }
  });
}

function initLiveClock() {
  const clockEl = document.querySelector("#live-clock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockEl.textContent = `${hours}:${minutes}:${seconds} IST`;
  }

  update();
  setInterval(update, 1000);
}

function initScrollProgressAndBackToTop() {
  const progressBar = document.querySelector("#scroll-progress");
  const bttBtn = document.querySelector("#back-to-top");
  const bttCircle = document.querySelector("#btt-circle");
  const circleCircumference = 2 * Math.PI * 20; // ~125.66

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress * 100))}%`;
    }

    if (bttBtn && bttCircle) {
      if (scrollTop > 280) {
        bttBtn.classList.add("show");
      } else {
        bttBtn.classList.remove("show");
      }
      const offset = circleCircumference - progress * circleCircumference;
      bttCircle.style.strokeDashoffset = String(offset);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (bttBtn) {
    bttBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function init3DTilt() {
  const tiltCards = document.querySelectorAll("[data-tilt], #hero-visual-card");

  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

      const pctX = ((x / rect.width) * 100).toFixed(1);
      const pctY = ((y / rect.height) * 100).toFixed(1);
      card.style.setProperty("--glow-x", `${pctX}%`);
      card.style.setProperty("--glow-y", `${pctY}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initMetricCounters() {
  const counterElements = document.querySelectorAll("[data-target]");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      obs.unobserve(el);

      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const isDecimal = el.dataset.decimal !== undefined;
      const duration = 1600;
      const startTime = performance.now();

      function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = target * easeOut;

        if (isDecimal) {
          el.textContent = current.toFixed(1) + suffix;
        } else {
          el.textContent = Math.floor(current).toLocaleString("en-US") + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (isDecimal) {
            el.textContent = target.toFixed(1) + suffix;
          } else {
            el.textContent = target.toLocaleString("en-US") + suffix;
          }
        }
      }

      requestAnimationFrame(animate);
    });
  }, { threshold: 0.3 });

  counterElements.forEach((el) => observer.observe(el));
}

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

function closeMenu() {
  if (!nav || !menuButton) return;
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const opening = menuButton.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("open", opening);
    menuButton.setAttribute("aria-expanded", String(opening));
    menuButton.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  window.matchMedia("(min-width: 861px)").addEventListener("change", closeMenu);
}

const navigationLinks = nav ? [...nav.querySelectorAll("a")] : [];
const sections = [...document.querySelectorAll("main > section[id]")];
let navFramePending = false;

function updateActiveNav() {
  const header = document.querySelector(".site-header");
  const headerBottom = header ? header.getBoundingClientRect().bottom : 80;
  let active = sections.length > 0 ? sections[0].id : "";

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= headerBottom + 120) {
      active = section.id;
    }
  });

  navigationLinks.forEach((link) => {
    const selected = link.hash === `#${active}`;
    link.classList.toggle("active", selected);
    if (selected) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });

  navFramePending = false;
}

window.addEventListener("scroll", () => {
  if (!navFramePending) {
    navFramePending = true;
    window.requestAnimationFrame(updateActiveNav);
  }
}, { passive: true });

window.addEventListener("resize", updateActiveNav);
updateActiveNav();

function initEstimator() {
  const cargoSelect = document.querySelector("#est-cargo");
  const distanceSlider = document.querySelector("#est-distance");
  const distanceDisplay = document.querySelector("#est-distance-display");
  const priorityButtons = document.querySelectorAll(".priority-btn");

  const timeOutput = document.querySelector("#est-time-output");
  const vehicleOutput = document.querySelector("#est-vehicle-output");
  const tonnageOutput = document.querySelector("#est-tonnage-output");
  const efficiencyOutput = document.querySelector("#est-efficiency-output");
  const escortOutput = document.querySelector("#est-escort-output");
  const transferBtn = document.querySelector("#transfer-estimate-btn");

  if (!cargoSelect || !distanceSlider) return;

  let currentPriority = "standard";

  function calculate() {
    const distance = parseInt(distanceSlider.value, 10);
    distanceDisplay.textContent = `${distance} km`;

    const selectedOption = cargoSelect.selectedOptions[0];
    const speed = parseFloat(selectedOption.dataset.speed || "45");
    const trailer = selectedOption.dataset.trailer || "Specialized Trailer";
    const tonnage = selectedOption.dataset.tonnage || "35-80T";

    let priorityMultiplier = 1;
    let escortText = "Standard Clearance";
    if (currentPriority === "express") {
      priorityMultiplier = 0.85;
      escortText = "Dual Driver Express";
    } else if (currentPriority === "escort") {
      priorityMultiplier = 1.25;
      escortText = "Civil Pilot Escort Active";
    }

    const transitHours = (distance / speed) * priorityMultiplier;
    const hoursFormatted = transitHours < 1
      ? `${Math.round(transitHours * 60)} Mins`
      : `~ ${transitHours.toFixed(1)} Hours`;

    const efficiency = (98.6 - (distance / 3500)).toFixed(1);

    timeOutput.textContent = hoursFormatted;
    vehicleOutput.textContent = trailer;
    tonnageOutput.textContent = `Load Class: ${tonnage}`;
    efficiencyOutput.textContent = `${efficiency}%`;
    escortOutput.textContent = escortText;
  }

  distanceSlider.addEventListener("input", calculate);
  cargoSelect.addEventListener("change", calculate);

  priorityButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      priorityButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentPriority = btn.dataset.priority;
      calculate();
    });
  });

  if (transferBtn) {
    transferBtn.addEventListener("click", () => {
      const cargoVal = cargoSelect.value;
      const distance = distanceSlider.value;
      const contactCargo = document.querySelector("#cargo");
      const messageField = document.querySelector("#message");
      const companyField = document.querySelector("#company");

      if (contactCargo) {
        contactCargo.value = cargoVal;
        contactCargo.removeAttribute("aria-invalid");
        const cargoErr = document.querySelector("#cargo-error");
        if (cargoErr) cargoErr.textContent = "";
      }

      if (messageField) {
        messageField.value = `Estimated Highway Distance: ~${distance} km (${currentPriority.toUpperCase()} Priority).\nVehicle Configuration: ${vehicleOutput.textContent}.\nEstimated Transit Window: ${timeOutput.textContent}.`;
      }

      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        if (companyField) setTimeout(() => companyField.focus(), 600);
      }

      showToast(`Calculation applied for ${cargoVal} (~${distance} km)!`);
    });
  }

  calculate();
}

const tableBody = document.querySelector("#shipments-body");
const filter = document.querySelector("#status-filter");
const searchInput = document.querySelector("#table-search-input");
const chartBars = [...document.querySelectorAll(".bar-row[data-filter]")];
const chartReset = document.querySelector("#chart-reset");
const tableSummary = document.querySelector("#table-summary");

function renderShipments() {
  if (!tableBody) return;
  const statusFilterVal = filter ? filter.value : "all";
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  const visible = fleetShipments.filter((shipment) => {
    const matchesStatus = statusFilterVal === "all" || shipment.status === statusFilterVal;
    const matchesQuery = !query ||
      shipment.id.toLowerCase().includes(query) ||
      shipment.cargo.toLowerCase().includes(query) ||
      shipment.origin.toLowerCase().includes(query) ||
      shipment.destination.toLowerCase().includes(query) ||
      shipment.vehicle.toLowerCase().includes(query);
    return matchesStatus && matchesQuery;
  });

  if (visible.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 30px; color: var(--muted);">
          No active fleet consignments found matching current criteria.
        </td>
      </tr>
    `;
  } else {
    tableBody.innerHTML = visible.slice(0, 6).map((s) => `
      <tr>
        <td>
          <a class="table-id-link" href="#tracking" data-track="${s.id}" aria-label="Track shipment ${s.id}">
            ${s.id}
          </a>
        </td>
        <td><strong>${s.cargo}</strong></td>
        <td>${s.origin}</td>
        <td>${s.destination}</td>
        <td><code>${s.vehicle}</code></td>
        <td>${badge(s.status)}</td>
        <td>${s.shortEta}</td>
        <td>
          <button type="button" class="table-action-btn" data-track="${s.id}">
            Track Live
          </button>
        </td>
      </tr>
    `).join("");
  }

  if (tableSummary) {
    tableSummary.textContent = `Displaying ${Math.min(visible.length, 6)} of ${fleetShipments.length} active fleet movements. Click "Full Manifest" to view all 12 commercial runs with telemetry.`;
  }

  chartBars.forEach((bar) => {
    bar.setAttribute("aria-pressed", String(bar.dataset.filter === statusFilterVal));
  });
}

if (filter) filter.addEventListener("change", renderShipments);
if (searchInput) searchInput.addEventListener("input", renderShipments);

chartBars.forEach((bar) => {
  bar.addEventListener("click", () => {
    if (filter) {
      filter.value = bar.dataset.filter;
      renderShipments();
    }
  });
});

if (chartReset) {
  chartReset.addEventListener("click", () => {
    if (filter) {
      filter.value = "all";
      filter.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (searchInput) searchInput.value = "";
    renderShipments();
    openFleetModal();
    showToast("Opened full Western Corridor Fleet Manifest.");
  });
}

renderShipments();

const trackingForm = document.querySelector("#tracking-form");
const trackingInput = document.querySelector("#shipment-id");
const trackingError = document.querySelector("#tracking-error");
const trackingResult = document.querySelector("#tracking-result");

function clearTrackingError() {
  if (trackingError) {
    trackingError.hidden = true;
    trackingError.textContent = "";
  }
  if (trackingInput) {
    trackingInput.removeAttribute("aria-invalid");
  }
}

function showShipment(rawId) {
  const id = rawId.trim().toUpperCase();
  if (trackingInput) trackingInput.value = id;
  clearTrackingError();

  const demoButtons = document.querySelectorAll(".demo-ids button");
  demoButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.track === id);
  });

  const shipment = fleetShipments.find((entry) => entry.id === id);

  if (!shipment) {
    if (trackingResult) trackingResult.replaceChildren();
    if (trackingError) {
      trackingError.textContent = id
        ? `Consignment "${id}" not found. Verify the Waybill ID or select from active fleet runs above.`
        : "Please enter a commercial Waybill / Shipment ID.";
      trackingError.hidden = false;
    }
    if (trackingInput) trackingInput.setAttribute("aria-invalid", "true");
    return false;
  }

  const delivered = shipment.status === "Delivered";
  const delayed = shipment.status === "Delayed";
  const transitLabel = delayed ? "Transit &middot; Regulated Speed" : "In Transit &middot; Active";
  const arrivalLabel = delivered ? "Delivery Completed" : "Estimated Arrival (ETA)";

  const progressPercent = shipment.progress || 50;
  const trackStartX = 30;
  const trackEndX = 430;
  const cargoX = trackStartX + (progressPercent / 100) * (trackEndX - trackStartX);

  trackingResult.innerHTML = `
    <article class="shipment-result" aria-label="Shipment ${shipment.id}">
      <div class="result-heading">
        <div class="result-id-group">
          <h4>${shipment.id}</h4>
          <button type="button" class="btn-copy-id" id="copy-id-btn" title="Copy tracking ID">
            <svg class="icon" aria-hidden="true"><use href="#i-copy"></use></svg>
            <span>Copy ID</span>
          </button>
        </div>
        ${badge(shipment.status)}
      </div>

      <div class="journey-pipeline-box">
        <div class="pipeline-header">
          <span>Active Highway Corridor &middot; <strong>Western Heavy Freight Belt</strong></span>
          <span>Route Telemetry: <strong>${progressPercent}% Completed</strong></span>
        </div>

        <svg class="pipeline-svg" viewBox="0 0 460 60" role="img" aria-label="Live route pipeline from ${shipment.origin} to ${shipment.destination}">
          <line class="pipeline-bg-track" x1="30" y1="30" x2="430" y2="30" />

          <line class="pipeline-glow-pulse" x1="30" y1="30" x2="${cargoX}" y2="30" />

          <line class="pipeline-energy-beam" x1="30" y1="30" x2="${cargoX}" y2="30" />

          <circle class="pipeline-node node-origin" cx="30" cy="30" r="8" />

          <circle class="pipeline-waypoint-ring" cx="${cargoX}" cy="30" r="6" />

          <circle class="pipeline-node node-dest" cx="430" cy="30" r="8" />

          <g transform="translate(${cargoX - 14}, 16)" class="pipeline-truck-hud">
            <rect width="28" height="28" rx="8" fill="#151735" stroke="#28d7ba" stroke-width="2" />
            <circle cx="14" cy="14" r="4" fill="#28d7ba" />
          </g>
        </svg>

        <div class="pipeline-stations">
          <div class="pipeline-hub">
            <small>Origin Hub</small>
            <span>${shipment.origin}</span>
          </div>

          <div class="pipeline-hub hub-current">
            <small>Live GPS Waypoint</small>
            <span>${shipment.location}</span>
          </div>

          <div class="pipeline-hub hub-dest">
            <small>Destination Terminal</small>
            <span>${shipment.destination}</span>
          </div>
        </div>
      </div>

      <div class="route-summary">
        <span><small>Origin Terminal</small>${shipment.origin}</span>
        <svg class="icon icon-violet" aria-hidden="true"><use href="#i-route"></use></svg>
        <span><small>Destination Site</small>${shipment.destination}</span>
      </div>

      <dl class="shipment-details">
        <div>
          <dt>Machinery Consignment &amp; Net Axle Load</dt>
          <dd><strong>${shipment.cargo}</strong> &middot; ${shipment.loadClass}</dd>
        </div>
        <div>
          <dt>Live Telemetry Waypoint</dt>
          <dd>${shipment.location}</dd>
        </div>
        <div>
          <dt>${arrivalLabel}</dt>
          <dd><strong>${shipment.eta}</strong></dd>
        </div>
        <div>
          <dt>Transport Axle Unit</dt>
          <dd><code>${shipment.vehicle}</code> &middot; GPS VTS Online</dd>
        </div>
        <div>
          <dt>Certified Heavy Haul Driver</dt>
          <dd>${shipment.driver} &middot; <small style="color:var(--muted);">${shipment.driverPhone}</small></dd>
        </div>
      </dl>

      <ol class="tracking-timeline" aria-label="Shipment milestones">
        <li class="complete">01 Plant Survey &amp; Rigging</li>
        <li class="${delivered ? "complete" : "current"}">02 ${transitLabel}</li>
        <li class="${delivered ? "complete" : ""}">03 ${delivered ? "Delivered &amp; Handover" : "Receiving Staged"}</li>
      </ol>

      <p class="result-note">
        <strong>Control Room Dispatch Feed:</strong> ${shipment.note} Live Speed: ${shipment.speed}. Cargo Temp: ${shipment.temperature}.
      </p>
    </article>
  `;

  const copyBtn = document.querySelector("#copy-id-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shipment.id).then(() => {
          showToast(`Consignment ID ${shipment.id} copied to clipboard!`);
        }).catch(() => {
          showToast(`Consignment: ${shipment.id}`);
        });
      } else {
        showToast(`Consignment: ${shipment.id}`);
      }
    });
  }

  return true;
}

if (trackingForm) {
  trackingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (trackingInput) showShipment(trackingInput.value);
  });
}

if (trackingInput) {
  trackingInput.addEventListener("input", clearTrackingError);
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-track]");
  if (!trigger) return;
  const trackId = trigger.dataset.track;
  showShipment(trackId);

  const trackingSection = document.querySelector("#tracking");
  if (trackingSection && !trigger.closest("#tracking")) {
    trackingSection.scrollIntoView({ behavior: "smooth" });
  }

  closeFleetModal();
});

showShipment("IND-1025");

const fleetModal = document.querySelector("#fleet-modal");
const modalTableBody = document.querySelector("#modal-table-body");
const modalSearchInput = document.querySelector("#modal-search-input");
const modalTabs = document.querySelector("#modal-tabs");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const modalFooterClose = document.querySelector("#modal-footer-close");
const modalBackdrop = document.querySelector("#modal-backdrop");
const modalCountSummary = document.querySelector("#modal-count-summary");
const btnOpenFleetModal = document.querySelector("#btn-open-fleet-modal");
const btnQuickManifestPopup = document.querySelector("#btn-quick-manifest-popup");
const btnExportCsv = document.querySelector("#btn-export-csv");
const btnPrintManifest = document.querySelector("#btn-print-manifest");

let activeModalTab = "all";

function renderModalFleetTable() {
  if (!modalTableBody) return;
  const query = modalSearchInput ? modalSearchInput.value.trim().toLowerCase() : "";

  const filtered = fleetShipments.filter((s) => {
    const matchesTab = activeModalTab === "all" || s.status === activeModalTab;
    const matchesQuery = !query ||
      s.id.toLowerCase().includes(query) ||
      s.cargo.toLowerCase().includes(query) ||
      s.origin.toLowerCase().includes(query) ||
      s.destination.toLowerCase().includes(query) ||
      s.driver.toLowerCase().includes(query) ||
      s.vehicle.toLowerCase().includes(query);
    return matchesTab && matchesQuery;
  });

  if (filtered.length === 0) {
    modalTableBody.innerHTML = `
      <tr>
        <td colspan="9" style="text-align: center; padding: 40px; color: var(--muted);">
          No fleet consignments found matching "${query || activeModalTab}".
        </td>
      </tr>
    `;
  } else {
    modalTableBody.innerHTML = filtered.map((s) => `
      <tr>
        <td><strong><a href="#tracking" data-track="${s.id}" style="color:var(--primary);">${s.id}</a></strong></td>
        <td>${s.cargo} <small style="display:block;color:var(--muted);">${s.loadClass}</small></td>
        <td>${s.origin} &rarr; ${s.destination}</td>
        <td>${s.location}</td>
        <td><code>${s.vehicle}</code></td>
        <td>${s.driver} <small style="display:block;color:var(--muted);">${s.driverPhone}</small></td>
        <td><strong>${s.speed}</strong></td>
        <td>${badge(s.status)}</td>
        <td>
          <button type="button" class="table-action-btn" data-track="${s.id}">
            Track
          </button>
        </td>
      </tr>
    `).join("");
  }

  if (modalCountSummary) {
    modalCountSummary.textContent = `Showing ${filtered.length} of ${fleetShipments.length} managed commercial consignments.`;
  }
}

function openFleetModal() {
  if (!fleetModal) return;
  fleetModal.hidden = false;
  document.body.style.overflow = "hidden";
  renderModalFleetTable();
  if (modalSearchInput) modalSearchInput.focus();
}

function closeFleetModal() {
  if (!fleetModal || fleetModal.hidden) return;
  fleetModal.hidden = true;
  document.body.style.overflow = "";
}

if (btnOpenFleetModal) btnOpenFleetModal.addEventListener("click", openFleetModal);
if (btnQuickManifestPopup) btnQuickManifestPopup.addEventListener("click", openFleetModal);
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeFleetModal);
if (modalFooterClose) modalFooterClose.addEventListener("click", closeFleetModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeFleetModal);

if (modalSearchInput) modalSearchInput.addEventListener("input", renderModalFleetTable);

if (modalTabs) {
  modalTabs.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      modalTabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeModalTab = btn.dataset.tab;
      renderModalFleetTable();
    });
  });
}

if (btnExportCsv) {
  btnExportCsv.addEventListener("click", () => {
    const headers = ["Shipment ID", "Cargo", "Load Class", "Origin", "Destination", "Location", "Vehicle", "Driver", "Driver Phone", "Speed", "Status", "ETA"];
    const rows = fleetShipments.map((s) => [
      s.id,
      `"${s.cargo}"`,
      `"${s.loadClass}"`,
      s.origin,
      s.destination,
      `"${s.location}"`,
      `"${s.vehicle}"`,
      `"${s.driver}"`,
      `"${s.driverPhone}"`,
      s.speed,
      s.status,
      `"${s.eta}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `indusmove_fleet_manifest_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("Fleet manifest CSV downloaded successfully!");
  });
}

if (btnPrintManifest) {
  btnPrintManifest.addEventListener("click", () => {
    window.print();
  });
}

const infoModal = document.querySelector("#info-modal");
const infoModalTitle = document.querySelector("#info-modal-title");
const infoModalBody = document.querySelector("#info-modal-body");
const infoModalCloseBtn = document.querySelector("#info-modal-close-btn");
const infoModalFooterClose = document.querySelector("#info-modal-footer-close");
const infoModalBackdrop = document.querySelector("#info-modal-backdrop");

const corporateModalContent = {
  terms: {
    title: "Commercial Terms of Carriage & Heavy Haul Agreement",
    html: `
      <h4>1. Scope of Heavy Haul Operations</h4>
      <p>All consignments are transported under the Motor Vehicles Act (CMVR) guidelines and Indian Banks' Association (IBA) approved logistics standards. Cargo weights exceeding 49 metric tons require verified axle load weightment slips prior to gate dispatch.</p>
      <h4>2. Route Survey & Civil Escorts</h4>
      <p>Over-dimensional cargo (ODC) movements will be accompanied by civil pilot escort vehicles. Tollway clearances, flyover structural ratings, and electrical utility shutdowns are coordinated in partnership with state highway authorities.</p>
      <h4>3. Marine & Transit Cover</h4>
      <p>IndusMove maintains comprehensive All-Risk Carrier Legal Liability cover. Clients are entitled to direct digital e-Waybill confirmation and electronic receipt acknowledgment upon arrival.</p>
    `
  },
  privacy: {
    title: "VTS Telemetry & Corporate Privacy Policy",
    html: `
      <h4>1. Satellite Telemetry Security</h4>
      <p>GPS tracking data, vehicle coordinates, axle temperature, and speed logs are transmitted via encrypted AIS-140 certified cellular channels. Consignment coordinates are accessible exclusively to authorized corporate account dispatchers.</p>
      <h4>2. Confidentiality & Non-Disclosure</h4>
      <p>Proprietary machinery specifications, drawings, installation sites, and bill of lading records are protected under enterprise NDAs. Telemetry historical logs are archived for statutory tax and audit purposes for 3 years.</p>
    `
  },
  sla: {
    title: "Commercial Service Level Agreement (SLA)",
    html: `
      <h4>1. 99.4% On-Time Delivery Guarantee</h4>
      <p>Committed project installation delivery windows are backed by financial SLA credits. Standard highway transit allows planned driver rotation every 8 hours in compliance with national road safety regulations.</p>
      <h4>2. Breakdown Replacement Protocol</h4>
      <p>In the rare event of mechanical tire or tractor failure, our 24/7 central control room guarantees standby replacement power units deployed within 4 hours across the Western Heavy Freight Corridor.</p>
    `
  }
};

function openInfoModal(type) {
  if (!infoModal || !corporateModalContent[type]) return;
  const content = corporateModalContent[type];
  infoModalTitle.textContent = content.title;
  infoModalBody.innerHTML = content.html;
  infoModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeInfoModal() {
  if (!infoModal || infoModal.hidden) return;
  infoModal.hidden = true;
  document.body.style.overflow = "";
}

document.querySelectorAll(".footer-modal-link").forEach((btn) => {
  btn.addEventListener("click", () => openInfoModal(btn.dataset.modal));
});

if (infoModalCloseBtn) infoModalCloseBtn.addEventListener("click", closeInfoModal);
if (infoModalFooterClose) infoModalFooterClose.addEventListener("click", closeInfoModal);
if (infoModalBackdrop) infoModalBackdrop.addEventListener("click", closeInfoModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeFleetModal();
    closeInfoModal();
  }
});

const enquiryForm = document.querySelector("#enquiry-form");
const enquiryFeedback = document.querySelector("#enquiry-feedback");

if (enquiryForm) {
  const requiredFields = [...enquiryForm.querySelectorAll("[required]")];

  const fieldNameMap = {
    company: "Company Name",
    person: "Contact Person",
    phone: "Phone",
    email: "Work Email",
    cargo: "Cargo type",
    pickup: "Pickup location",
    delivery: "Delivery location"
  };

  function fieldValidation(field) {
    const value = field.value.trim();
    const labelName = fieldNameMap[field.id] || "This field";

    if (!value) {
      return `${labelName} is required.`;
    }

    if (field.id === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || !field.validity.valid) {
        return "Please enter a valid work email address (e.g. name@company.com).";
      }
    }

    if (field.id === "phone") {
      const digits = value.replace(/\D/g, "");
      if (!/^\+?[\d\s().-]+$/.test(value) || digits.length < 10 || digits.length > 15) {
        return "Please enter a valid phone number (10–15 digits).";
      }
    }

    if (field.id === "cargo") {
      if (![...field.options].some((option) => option.value === value && value)) {
        return "Cargo type is required.";
      }
    }

    return "";
  }

  function displayValidation(field) {
    const error = fieldValidation(field);
    const errorEl = document.querySelector(`#${field.id}-error`);
    if (errorEl) errorEl.textContent = error;

    const customTrigger = document.querySelector(`#${field.id}-trigger`);

    if (error) {
      field.setAttribute("aria-invalid", "true");
      if (customTrigger) customTrigger.setAttribute("aria-invalid", "true");
    } else {
      field.removeAttribute("aria-invalid");
      if (customTrigger) customTrigger.removeAttribute("aria-invalid");
    }
    return !error;
  }

  requiredFields.forEach((field) => {
    field.addEventListener("blur", () => displayValidation(field));
    field.addEventListener(field.tagName === "SELECT" ? "change" : "input", () => {
      if (enquiryFeedback) enquiryFeedback.hidden = true;
      if (field.getAttribute("aria-invalid") === "true") displayValidation(field);
    });
  });

  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (enquiryFeedback) enquiryFeedback.hidden = true;

    const invalid = requiredFields.filter((field) => !displayValidation(field));
    if (invalid.length > 0) {
      if (invalid[0].id === "cargo") {
        const trigger = document.querySelector("#cargo-trigger");
        if (trigger) trigger.focus();
        else invalid[0].focus();
      } else {
        invalid[0].focus();
      }
      return;
    }

    const values = Object.fromEntries(
      [...new FormData(enquiryForm).entries()].map(([k, v]) => [k, String(v).trim()])
    );

    const refNumber = `INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    commercialEnquiries.push({ ...values, refNumber, recordedAt: new Date().toISOString() });

    if (enquiryFeedback) {
      enquiryFeedback.innerHTML = `
        <svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg>
        <div>
          <strong>Commercial Freight Request Logged &middot; Ref #${refNumber}</strong>
          <p style="margin: 4px 0 0; font-size: 12px;">Thank you, ${values.person} (${values.company}). A specialized heavy haul routing engineer has been assigned for route corridor ${values.pickup} &rarr; ${values.delivery}. Direct dispatch desk: 1800-202-6000.</p>
        </div>
      `;
      enquiryFeedback.hidden = false;
    }

    showToast(`Inquiry #${refNumber} registered! Dispatch team notified.`);

    enquiryForm.reset();
    requiredFields.forEach((field) => {
      field.removeAttribute("aria-invalid");
      const errEl = document.querySelector(`#${field.id}-error`);
      if (errEl) errEl.textContent = "";
      const customTrg = document.querySelector(`#${field.id}-trigger`);
      if (customTrg) customTrg.removeAttribute("aria-invalid");
    });
  });
}

document.querySelectorAll(".service-link").forEach((link) => {
  link.addEventListener("click", () => {
    const cargo = document.querySelector("#cargo");
    if (cargo) {
      cargo.value = link.dataset.service;
      cargo.removeAttribute("aria-invalid");
      cargo.dispatchEvent(new Event("change", { bubbles: true }));
      const cargoErr = document.querySelector("#cargo-error");
      if (cargoErr) cargoErr.textContent = "";
      const cargoTrigger = document.querySelector("#cargo-trigger");
      if (cargoTrigger) cargoTrigger.removeAttribute("aria-invalid");
    }
    if (enquiryFeedback) enquiryFeedback.hidden = true;
  });
});

const yearEl = document.querySelector("#current-year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

window.addEventListener("DOMContentLoaded", () => {
  initHeroLogisticsCanvas();
  initCustomDropdowns();
  initLiveClock();
  initScrollProgressAndBackToTop();
  init3DTilt();
  initMetricCounters();
  initEstimator();
});
