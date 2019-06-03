const splitNames = fullName => {
    let result = undefined;
  
    if (fullName) {
      const nameParts = fullName.split();
    }
  };
  
  //  truthy and falsey
  //  truthy - {}, 'non empty string', number different than zero
  // falsey - null, undefined, 0, ''
  
  /**
   * Learning JS primitive types
   */
  const bottle = {
    // object
    material: "plastic", // string
    color: "transparent",
    label: {
      // object
      color: "blue",
      text: "water"
    },
    cap: {
      // object
      material: "plastic",
      color: "blue"
    },
    liquid: [
      {
        type: "coke",
        volume: "200"
      }
    ],
    maxVolume: 2000,
    volume: 200, // number
    isCapOn: true, // boolean
    openCap: () => {
      this.isCapOn = false;
      this.cap = null;
    },
    putCapOn: cap => {
      if (!cap) {
        if (this.cap) {
          this.isCapOn = true;
        }
      } else {
        if (this.cap) {
          this.openCap();
        }
        this.cap = cap;
        this.isCapOn = tue;
      }
    },
    liquidIn: (liquid, volume, whenFull) => {
      // {type: 'jin'}, 300
      if (liquid && volume) {
        const capacityLeft = this.maxVolume - this.volume;
        let volumeToKeep = volume;
        if (capacityLeft < volume) {
          volumeToKeep = capacityLeft;
          whenFull(volume, volumeToKeep);
        }
        const juice = {
          type: liquid.type,
          volume: volumeToKeep
        };
        if (capacityLeft > 0) {
          this.liquid.push(juice);
          this.volume += volume;
        }
      }
    }
  };
  
  bottle.cap = null;
  bottle.putCapOn({
    material: "metal",
    color: "red"
  });
  
  const handleFull = (volume, capacityTaken) => {
    console.log(
      `last pour took only ${capacityTaken}ml of ${volume}ml we intended to pour`
    );
  };
  
  bottle.liquidIn(
    {
      type: "Buorbon"
    },
    50,
    handleFull
  );
  
  bottle.liquidIn(
    {
      type: "Simple Syrup"
    },
    10,
    handleFull
  );
  
  bottle.liquidIn(
    {
      type: "Angostira bitters"
    },
    5,
    handleFull
  );
  
  bottle.liquidIn(
    {
      type: "Orange peel"
    },
    15,
    handleFull
  );