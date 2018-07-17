$(document).ready(function() {

  // var editor = new $.fn.dataTable.Editor( {} );
  //
  // new $.fn.dataTable.Editor( {
  //     // ajax:  '/api/staff',
  //     table: '#myTable',
  //     // fields: [
  //     //     { label: 'First name', name: 'first_name' },
  //     //     { label: 'Last name',  name: 'last_name'  },
  //     //     // etc
  //     // ]
  // } );

  const claimsRef = firebase.database().ref('claims');

  let dataTable = $('#file-tracker-table').DataTable(
    {
      // data: dataSet,
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
        { title:  "Lead Number" },
        { title:  "Customer Name" },
        { title:  "Region" },
        { title:  "Peak Branch" },
        { title:  "Program" },
        { title:  "Claim Type" },
        { title:  "Contract Value" },
        { title:  "File Open Date" },
        { title:  "File Close Date" },
        { title:  "Estimated Non-Insurable Claim" },
        { title:  "Estimated Insurable Claim" },
        { title:  "Peak Insurer Notified" },
        { title:  "Lead Insurer" },
        { title:  "Peak Payment" },
      ]
    }
  );

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
      claimObj.PeakInsurerNotified,
      claimObj.LeadInsurer,
      claimObj.PeakPayment,
    ];

    // push the row into the dataSet
    dataTable.row.add(dataRow).draw();
    console.log(dataRow);
  });
});
