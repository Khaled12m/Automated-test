function mooncakeSays(message) {
  console.log("Khaled's feature")
  console.log("abdulmajeed's feature")
  let mooncake = '(o.o)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;