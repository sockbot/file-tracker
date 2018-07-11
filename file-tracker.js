$(document).ready(function() {
  $('#main').DataTable(
    {
      paging: false,
      dom: 'Blfrtip',
      buttons: [
        'copy', 'excel', 'pdf'
      ]
    }
  );
})
