<?php include 'header.php';
?>
    <style>
    p
    {
      font-size: 1em;
    }
    img
    { 
      display:block;
      text-align: center;
      margin: 0 auto;
      width: 400px;
    }
    div.image:hover img.jasperimages
    {
      display: block;
      text-align: center;
      margin: 0 auto;
      width: 900px;
    }
    
    .caption{
      text-align: center;
      margin: 0 auto;
    }
    </style>
      <?php
        function images($dir) {
        $files1 = scandir($dir);
        foreach ($files1 as $x=>$value)
        {
            if ($value == "." || $value == ".."){
                unset($files1[$x]);
            }
        }
        foreach ($files1 as $x=>$value)
        {

            echo "<li class=\"col-md-6\"><img class=\"img-responsive\" src=\"$dir$value\"></li>";
        }
        }
        images("imgs/wireframes/");
      ?>
      </ul>

    </div>
  </body>
  <script src="photo-gallery.js"></script>
</html>