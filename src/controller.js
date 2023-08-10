(function exportcontroller() {
  function Controller(ship) {
    this.ship = ship;
    this.sailInterval = null; 
    this.initForm();
    document.querySelector('#sailbutton').addEventListener('click', () => {
      this.setSail();
     
    });
    this.initialiseSea();

  }

  Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = [
      './images_ship/water0.png',
      './images_ship/water1.png',
    ];
    let backgroundIndex = 0;
    const renderPorts = () => {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';
      portsElement.innerHTML = ''; 

      this.ship.itinerary.ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;

        portsElement.appendChild(newPortElement);
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;
      });
    };

    const renderShip = () => {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex;
      const nextPortElement = document.querySelector(
        `[data-port-index='${nextPortIndex}']`
      );

      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${nextPortElement.offsetTop + 32}px`;
      shipElement.style.left = `${nextPortElement.offsetLeft - 32}px`;
    };

    renderPorts();
    renderShip();

    window.setInterval(() => {
      document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
      backgroundIndex += 1;
    }, 1000);
  };

  Controller.prototype.renderShip = function renderShip() {
    const ship = this.ship;
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex +1;

    const currentPortName = ship.currentPort.name;
    const nextPortName = (nextPortIndex < ship.itinerary.ports.length)
      ? ship.itinerary.ports[nextPortIndex].name
      : 'End of the line';

    const currentPortElement = document.querySelector('#currentPort');
    currentPortElement.textContent = `Current Port: ${currentPortName}`;

    const nextPortElement = document.querySelector('#nextPort');
    nextPortElement.textContent = `Next Port: ${nextPortName}`;
  };

  Controller.prototype.setSail = function setSail() {
    const ship = this.ship;
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const nextPortIndex = currentPortIndex +1;
    const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

    const shipElement = document.querySelector('#ship');
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === nextPortElement.offsetLeft - 32) {
        ship.setSail();
        ship.dock();
        clearInterval(this.sailInterval); 
        this.renderShip();

        this.renderMessage(`Now departing ${ship.currentPort.name}`);
      }
      shipElement.style.left = `${shipLeft + 1}px`;
    }, 20);

    this.sailInterval = sailInterval;

    if (!nextPortElement) {
      this.renderMessage(`End of the line!`);
      alert('End of the line!');
    } else {
      this.renderMessage(`Now departing ${ship.currentPort.name}`);
    }
  };

  Controller.prototype.renderMessage = function renderMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerHTML = message;
    const viewport = document.querySelector('#viewport');
    viewport.appendChild(messageElement);

    setTimeout(() => {
      viewport.removeChild(messageElement);
    }, 2000);
  };

  Controller.prototype.initForm = function initForm() {
    const addPortForm = document.querySelector('#addPortForm');
    addPortForm.addEventListener('submit', (event) => {
      event.preventDefault(); 
      const portNameInput = document.querySelector('#portNameInput');
      const portName = portNameInput.value;
      if (portName.trim() !== '') {
        const newPort = new Port(portName);
        this.ship.itinerary.addPort(newPort);
        portNameInput.value = ''; 
      }
    });
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();