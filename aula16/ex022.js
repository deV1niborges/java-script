// RECURSIVIDADE
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(6))

/* 
FATORIAL
5! = 5 x 4 x 3 x 2 x 1 = 120

5! = 5 x 4!

n! = n x (n-1)!
n! = 5 x (5-1)!
n! = 5 x 4!
n! = 5 x 24
n! = 120

n! = n x (n-1)!
1! = 1

*/

