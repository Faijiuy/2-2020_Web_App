<!DOCTYPE html>
<html lang="en">
    <body>
        <?php
            $userlist = array(
                array("u" => "jack", "p" => "jack123"),
                array("u" => "jane", "p" => "jane123")
            );
            
            $user = $_POST['user'];
            $password = $_POST['password'];
            
            foreach ($userlist as $rec) {
                echo $rec['u'] . "---" .$rec['p'] . "<br/>";
                if ($user == $rec['u'] && $password == $rec['p']) {
                    $isLoggedIn = true;
                    break;
                }
            }

            if ($isLoggedIn) {
                echo "Login Success";
            } else {
                echo "Login FAILED";
            }
        ?>
    </body>
</html>