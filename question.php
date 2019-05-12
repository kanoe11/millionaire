<?php
$dbhost = "localhost";
$user = 'root';
$pwd = '';
$schema = 'millionaire';

$db = new mysqli('localhost', $user,$pwd,$schema) or die("unable to connect");

$query = $db->query('select val , Q , q_id from question INNER JOIN reponse on question.ID = reponse.q_id');
$outPut = array();
 $i = 0;
 while ($data =  $query->fetch_assoc() ) {
    $outPut[$i]['val'] = $data['val'];
    $outPut[$i]['q_id'] = $data['q_id'];
    $outPut[$i]['Q'] = $data['Q'];
   $i++;
} 
?>
    <div class="question-<?php echo $outPut[0]['q_id'] ?>" data-class="q<?php echo $outPut[0]['q_id'] ?>">
    <h2 class="questionTitle"><?php  echo $outPut[0]['Q'] ?></h2>
<?php
for ($i = 0 ; $i  <= 4; $i++) {
    
    ?>
    <div class="q1reponse" data-enabled="0">
        <div class="q1r"data-enabled="1"><?php echo  $outPut[$i]['val']  ?></div>
    </div>
<?php
}
echo json_encode($outPut);
?>