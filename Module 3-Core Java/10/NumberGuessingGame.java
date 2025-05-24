import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random random = new Random();
        int target = random.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Guess the number (1-100):");
        int guess;
        int attempts = 0;
        
        do {
            guess = scanner.nextInt();
            attempts++;
            
            if(guess < target) {
                System.out.println("Too low! Try again.");
            } else if(guess > target) {
                System.out.println("Too high! Try again.");
            }
        } while(guess != target);
        
        System.out.println("Correct! You guessed it in " + attempts + " attempts.");
    }
}