class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionExample {
    static void validateAge(int age) throws InvalidAgeException {
        if(age < 18) {
            throw new InvalidAgeException("Age must be 18 or older");
        }
        System.out.println("Valid age");
    }
    
    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch(InvalidAgeException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}