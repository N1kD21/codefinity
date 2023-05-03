package main

import  "fmt"
func main() {
	var pr = FizzBuzz(100, 3, 5)
	fmt.Print(pr)
	fmt.Print("\n")
}

func FizzBuzz(N int, Fizz int,Buzz int) (slice []string) {
	for i := 1; i <= N; i++ {
		//filling the slice with elements
		//each element is i as a string
		slice = append(slice, fmt.Sprint(i))
		//checking the remainder of a division
		a := i % Fizz
		b := i % Buzz;
		/*
		replacement of elements that are divided
		on 3 on the fizz
		on 5 on the buzz
		and 3 and 5 on fizzbuzz
		*/
		if a == 0 {
			slice[i-1] = "Fizz"
		}
		if b == 0 {
			slice[i-1] = "Buzz"
		}
		if a == 0 && b == 0 {
			slice[i-1] = "FizzBuzz"
		}
	}
	return
}