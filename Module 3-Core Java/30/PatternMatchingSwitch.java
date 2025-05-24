import java.util.List;
import java.util.stream.Collectors;

public record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 25),
            new Person("Bob", 30),
            new Person("Charlie", 20)
        );
        
        // Filter people older than 21
        List<Person> adults = people.stream()
                                  .filter(p -> p.age() > 21)
                                  .collect(Collectors.toList());
        
        adults.forEach(p -> System.out.println(p.name() + " is " + p.age()));
    }
}