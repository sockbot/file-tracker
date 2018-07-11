$(document).ready(function() {

  var editor = new $.fn.dataTable.Editor( {} );

  new $.fn.dataTable.Editor( {
      // ajax:  '/api/staff',
      table: '#myTable',
      // fields: [
      //     { label: 'First name', name: 'first_name' },
      //     { label: 'Last name',  name: 'last_name'  },
      //     // etc
      // ]
  } );

  $('#file-tracker-table').DataTable(
    {
      paging: false,
      dom: 'Blfrtip',
      select: true,
      buttons: [
        'copy',
        'excel',
        'pdf',
        { extend: 'create', editor: editor },
        { extend: 'edit', editor: editor },
        { extend: 'remove', editor: editor },
      ]
    }
  );

})
