<!DOCTYPE html>
<html lang="en">
    <body>
        <?php
            $score = $_GET['score'];

            if ($score >= 80) {
                $grade = "A";
            } elseif ($score >= 70) {
                $grade = "B";
            } elseif ($score >= 60) {
                $grade = "C";
            } elseif ($score >= 50) {
                $grade = "D";
            } else {
                $grade = "F";
            }

            // echo "Score: $score<br>";
            // echo "Grade:  $grade\n";
        ?>
        <table border= 1>
            <tr>
                <td><b>Score</b></td>
                <td><?php echo $score; ?></td>
            </tr>
            <tr>
                <td><b>Grade</b></td>
                <td><?php echo $grade; ?></td>
            </tr>
        </table>
    </body>
</html>
<