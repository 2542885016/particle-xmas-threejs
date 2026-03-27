// uiText.js
import * as THREE from "three";

export function createUIText() {
  if (typeof window === "undefined") return null;

  const text = "Merry Christmas";
  const fontSize = 270;
  const fontFamily = "'Brush Script MT', 'Playfair Display', cursive";
  const font = `${fontSize}px ${fontFamily}`;

  const padding = 40; // 额外留白，避免裁剪
  const dpr = window.devicePixelRatio || 1;

  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  tempCtx.font = font;
  const textMetrics = tempCtx.measureText(text);
  const textWidth = Math.ceil(textMetrics.width);
  const textHeight = Math.ceil(fontSize * 1.2);

  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil((textWidth + padding * 2) * dpr);
  canvas.height = Math.ceil((textHeight + padding * 2) * dpr);
  canvas.style.width = `${textWidth + padding * 2}px`;
  canvas.style.height = `${textHeight + padding * 2}px`;

  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // ===== 背景透明 =====
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ===== 字体（花体 + fallback）=====
  ctx.font = font;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const x = (textWidth + padding * 2) / 2;
  const y = (textHeight + padding * 2) / 2;

  // ===== 渐变填充（高级感核心）=====
  const gradient = ctx.createLinearGradient(0, y - 60, 0, y + 60);
  gradient.addColorStop(0, "#5c394dff");
  gradient.addColorStop(0.5, "#84384dff");
  gradient.addColorStop(1, "#8b505bff");
  ctx.fillStyle = gradient;

  // ===== 阴影（柔光）=====
  ctx.shadowColor = "rgba(255, 220, 150, 0.6)";
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 5;

  // 填充文字
  ctx.fillText(text, x, y);

  // ===== 描边（精致感）=====
  ctx.shadowColor = "transparent";
  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(209, 205, 205, 0.8)";
  ctx.strokeText(text, x, y);

  // ===== Three.js 精灵 =====
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });

  const sprite = new THREE.Sprite(material);

  // 左移 + 稍微放大
  sprite.position.set(-14, 7.2, 0);
  sprite.scale.set(9, 2.5, 1);

  return sprite;
}
