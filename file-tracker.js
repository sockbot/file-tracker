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

  const claimsRef = firebase.database().ref('claims');

  // load all thumbnails from db into a dataset array
  var dataSet = [];

  claimsRef.on('child_added', function(data) {
    const claimId = data.key;
    const claimObj = data.val();

    // Push each entry into a row aray
    let dataRow = [
      claimObj.LeadNumber,
      claimObj.CustomerName,
      claimObj.Region,
      claimObj.PeakBranch,
      claimObj.Program,
      claimObj.ClaimType,
      claimObj.ContractValue,
      claimObj.FileOpenDate,
      claimObj.FileCloseDate,
      claimObj.EstimatedNonInsurableClaim,
      claimObj.EstimatedInsurableClaim,
      claimObj.LeadInsurer,
      claimObj.PeakPayment,
    ];
    // push the row into the dataSet
    dataSet.push(dataRow);

  });
  console.log(dataSet);
  $('#file-tracker-table').DataTable(
    {
      data: dataSet,
      paging: false,
      dom: 'Blfrtip',
      select: true,
      buttons: [
        'copy',
        'excel',
        'pdf',
        // { extend: 'create', editor: editor },
        // { extend: 'edit', editor: editor },
        // { extend: 'remove', editor: editor },
      ],
      columns: [
        { title:  "LeadNumber" },
        { title:  "CustomerName" },
        { title:  "Region" },
        { title:  "PeakBranch" },
        { title:  "Program" },
        { title:  "ClaimType" },
        { title:  "ContractValue" },
        { title:  "FileOpenDate" },
        { title:  "FileCloseDate" },
        { title:  "EstimatedNonInsurableClaim" },
        { title:  "EstimatedInsurableClaim" },
        { title:  "PeakInsurerNotified" },
        { title:  "LeadInsurer" },
        { title:  "PeakPayment" },
      ]
    }
  );
})
