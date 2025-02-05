let power = 50;
let wealth = 50;
let peopleSatisfaction = 50;

function updateStatus() {
    document.getElementById("power").textContent = power;
    document.getElementById("wealth").textContent = wealth;
    document.getElementById("peopleSatisfaction").textContent = peopleSatisfaction;
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}

function checkGameOver() {
    if (power <= 0) {
        showMessage("您的權利已經耗盡，您被推翻了！");
        return true;
    } else if (wealth <= 0) {
        showMessage("您的國庫空虛，國家破產了！");
        return true;
    } else if (peopleSatisfaction <= 0) {
        showMessage("民心喪盡，起義爆發了！");
        return true;
    }
    return false;
}

function makeDecision(decision) {
    if (decision === 1) {
        power += 5;
        wealth -= 10;
        peopleSatisfaction += 5;
        showMessage("您決定修建新宫殿。");
    } else if (decision === 2) {
        power -= 5;
        wealth += 10;
        peopleSatisfaction -= 5;
        showMessage("您決定增加税收。");
    } else if (decision === 3) {
        power -= 5;
        wealth -= 5;
        peopleSatisfaction += 10;
        showMessage("您決定減稅。");
    } else {
        showMessage("無效的決策。");
    }
    updateStatus();
    if (checkGameOver()) {
        document.getElementById("decision").style.display = "none";
    }
}

window.onload = function() {
    updateStatus();
};