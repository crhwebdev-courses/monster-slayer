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

      if (this.checkWin()) {
        return;
      }

      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;

      this.checkWin();
    },
    specialAttack() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;

      if (this.checkWin()) {
        return;
      }

      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;

      this.checkWin();
    },
    heal() {},
    giveUp() {},
    calculateDamage(min, max) {
      const damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      return damage;
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm("You won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }

      return false;
    }
  }
});
