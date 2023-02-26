<script>
    // Import shipmentdata store
    import { shipmentData } from '../../../stores.js'
    let shipment;
    shipmentData.subscribe((val) => {
        shipment = val
    })

    // Filter out the items that has been completed
    let complete = shipmentData.filter((element) => {
        if (element.actual != 0) {
            return true;
        } else {
            return false
        }
    })
</script>

<div>
    <p>{complete.length} of {shipment.data} has been completed!</p>
</div>