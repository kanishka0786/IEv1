const str = "jan dec feb jul";

function escapeRegexx() {
  return str.match(/dec/g);
}

console.log(escapeRegexx());
