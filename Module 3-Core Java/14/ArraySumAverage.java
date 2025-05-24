import java.util.Scanner;

public class ArraySumAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = scanner.nextInt();
        
        double[] arr = new double[n];
        System.out.println("Enter " + n + " elements:");
        
        double sum = 0;
        for(int i = 0; i < n; i++) {
            arr[i] = scanner.nextDouble();
            sum += arr[i];
        }
        
        double average = sum / n;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}