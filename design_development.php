<?php include 'header.php';
?>
    <div>
      <div class="body">Our design development page is here</div>
      <ul class="row">
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

            echo "<li class=\"col-md-2\"><img class=\"img-responsive\" src=\"$dir$value\"></li>";
        }
        }
        images("imgs/initialdesigns/");
        images("imgs/paperproto1");
        images("imgs/paperproto2");
      ?>
      </ul>

      <div class="modal fade" id="my<a href="http://www.jqueryscript.net/tags.php?/Modal/">Modal</a>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

        <div class="modal-dialog">

          <div class="modal-content">

            <div class="modal-body"> </div>

          </div>

        </div>

      </div>

    </div>
  </body>
  <script src="photo-gallery.js"></script>
</html>

