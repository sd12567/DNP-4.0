import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        
        while(true) {
            System.out.print("Enter student ID (or -1 to stop): ");
            int id = scanner.nextInt();
            if(id == -1) break;
            
            scanner.nextLine(); // Consume newline
            System.out.print("Enter student name: ");
            String name = scanner.nextLine();
            
            students.put(id, name);
        }
        
        System.out.print("\nEnter ID to lookup: ");
        int lookupId = scanner.nextInt();
        String student = students.get(lookupId);
        
        System.out.println(student != null ? "Student: " + student : "Student not found");
    }
}