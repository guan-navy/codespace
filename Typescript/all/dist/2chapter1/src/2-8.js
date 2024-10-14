"use strict";
function dataFlowAnalysisWithNever(data) {
    if (typeof data === 'string') {
        console.log(data.toUpperCase());
    }
    else if (typeof data === 'number') {
        console.log(data.toFixed(2));
    }
    else {
        var data1_1 = data;
        console.log(data1_1);
    }
}
dataFlowAnalysisWithNever('免税');
