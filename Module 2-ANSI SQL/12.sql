SELECT e.event_id, e.title
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id
ORDER BY COUNT(s.session_id) DESC
LIMIT 1; 