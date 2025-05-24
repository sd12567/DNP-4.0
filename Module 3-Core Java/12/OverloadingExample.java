public class OverloadingExample {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double add(double a, double b) {
        return a + b;
    }
    
    public static int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public static void main(String[] args) {
        System.out.println("Two integers: " + add(5, 10));
        System.out.println("Two doubles: " + add(5.5, 10.5));
        System.out.println("Three integers: " + add(5, 10, 15));
    }
}