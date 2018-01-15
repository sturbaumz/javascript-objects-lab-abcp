var recipes = {
  'Eggs':'7',
  'Coconut Oil':'1/2 Cup',
  'Almond Flour':'1 Cup'
  }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object.key = 'value'
}
