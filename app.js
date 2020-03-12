new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert("You won!");
        this.gameIsRunning = false;
        return;
      }

      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert("You lost!");
        this.gameIsRunning = false;
        return;
      }
    },
    specialAttack() {},
    heal() {},
    giveUp() {},
    calculateDamage(min, max) {
      const damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      return damage;
    }
  }
});
