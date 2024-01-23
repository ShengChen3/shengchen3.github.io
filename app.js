<script>
  document.getElementById('nonLoopingGif').addEventListener('load', function() {
    this.setAttribute('src', this.getAttribute('src')) // Forces the GIF to stop looping
  });
</script>
