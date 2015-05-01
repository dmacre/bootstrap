$(".owl-carousel").owlCarousel();
<script>
    $('#counter').counter({
                        limit:500,      // Your count limit
                        speed:10000     // Counting speed
                        },
                        function(){     // Callback function
                          alert("completed")

                        });
</script>
