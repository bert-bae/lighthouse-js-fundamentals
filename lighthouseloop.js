function lightLoop (start, end) {
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
      console.log("LoopyLighthouse");
    }
    else if (i % 4 === 0) {
      console.log("Lighthouse");
    }
    else if (i % 3 === 0) {
      console.log("Loopy");
    }
    else {
      console.log(i);
    }
  }
}
console.log(lightLoop(100, 200));