<h1>Hands-on Activity<h1>
<?php
$table = array (
    "header" => array (
        "Student ID",
        "Firstname",
        "Middlename",
        "Lastname",
        "Section",
        "Course",
        "Yearlevel"
    ),
    "body" => array (
        array(
            "Student ID" => "Student ID",
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
        array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
            array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
            array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),  
            array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
        array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
        array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
        array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
        array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
        array(
            "Firstname" => "Firstname",
            "Middlename" => "Middlename",
            "Lastname" => "Lastname",
            "Section" => "Section",
            "Course" => "Course",
            "Yearlevel" => "Yearlevel"
        ),
    )
)
?>
<table border = "1">
        <?php
        for($i =0; $i <= count ($table["header"]) - 1; $i++) {
            echo "<th".$table["header"][$i]."</th";
        }
    ?>
 </thead>
    </tbody>
        <?php
        for($i =0; $i <= count ($table["body"]) - 1; $i++) {
            echo "<tr>";
            echo "<td>".$i."</td>";
            echo "<td>".$table["body"][$i]["Firstname"]."</td>";
            echo "<td>".$table["body"][$i]["Middlename"]."</td>";
            echo "<td>".$table["body"][$i]["Lastname"]."</td>";
            echo "<td>".$table["body"][$i]["Section"]."</td>";
            echo "<td>".$table["body"][$i]["Course"]."</td>";
            echo "<td>".$table["body"][$i]["Yearlevel"]."</td>";
            echo "</tr>";
        }
        ?>
        </tbody>
    </table>