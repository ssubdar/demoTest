<?xml version="1.0" encoding="UTF-8"?>
<editableResource createdTimestamp="1777558478792"
    createdUser="sachas.subdar"
    id="59ef8882:19ddebb6528:-7ad5:779543495:-1551637993"
    selfDescribing="properties" type="jsonschema_schema"
    updatedTimestamp="1777558478792" updatedUser="sachas.subdar" version="1.0">
    <syncdetails compare="1777558478785" lastSynced="1777558478792" sourceid="59ef8882:19ddebb6528:-7ad5"/>
    <loggingConfiguration debug="false" resultWriterLoggingLevel="FULL" writeStubEventsToDB="false"/>
    <resourceConfig schemaSourceTemplateName="JSONSchema">
        <schemaSourceConfig sourceType="102" uri="https://demo.testfire.net/swagger/properties.json">
            <processingRoot id="login body"
                pointer="/paths/~1login/post/parameters/0/schema" title="login body"/>
            <processingRoot id="getTransactions body"
                pointer="/paths/~1account~1{accountNo}~1transactions/post/parameters/2/schema" title="getTransactions body"/>
            <processingRoot id="trasnfer body"
                pointer="/paths/~1transfer/post/parameters/1/schema" title="trasnfer body"/>
            <processingRoot id="sendFeedback body"
                pointer="/paths/~1feedback~1submit/post/parameters/0/schema" title="sendFeedback body"/>
            <processingRoot id="addUser body"
                pointer="/paths/~1admin~1addUser/post/parameters/1/schema" title="addUser body"/>
            <processingRoot id="changePassword body"
                pointer="/paths/~1admin~1changePassword/post/parameters/1/schema" title="changePassword body"/>
        </schemaSourceConfig>
    </resourceConfig>
</editableResource>
