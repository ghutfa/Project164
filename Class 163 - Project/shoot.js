AFRAME.registerComponent("bullets", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var bullet = document.createElement("a-entity");
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
          });
          bullet.setAttribute("material", "color", "black");
          var cam = document.querySelector("#camera");
          pos = cam.getAttribute("position");
          bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
          var camera = document.querySelector("#camera").object3D;
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
          bullet.setAttribute("velocity", direction.multiplyScalar(-20));
          var scene = document.querySelector("#scene");
          bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
          });
          bullet.setAttribute("visible", false);
          bullet.addEventListener("collide", this.removeBullet);
          scene.appendChild(bullet);
          this.shootSound();
        }
      });
    },
    removeBullet: function (e) {
      var scene = document.querySelector("#scene");
      //bullet element
      var element = e.detail.target.el;
  
      //element which is hit
      var elementHit = e.detail.body.el;
  
      scene.appendChild(paint)
      element.removeEventListener("collide", this.removeBullet);
      scene.removeChild(element);
    },
    shootSound: function () {
      var entity = document.querySelector("#sound1");
      entity.components.sound.playSound();
    },
  });
  