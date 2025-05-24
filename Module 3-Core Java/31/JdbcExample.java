import java.sql.*;

public class JdbcExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String username = "root";
        String password = "password";
        
        try(Connection conn = DriverManager.getConnection(url, username, password)) {
            System.out.println("Connected to database");
            
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            
            while(rs.next()) {
                System.out.println(rs.getInt("id") + ": " + rs.getString("name"));
            }
        } catch(SQLException e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}