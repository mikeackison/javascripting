let total = 0
const limit = 10

for (let i = 0; i < limit; i++) {
  console.log(`starting with i=${i}  total=${total}`)
  total += i
  console.log(`end loop i=${i} total=${total}`)
}

console.log(total);