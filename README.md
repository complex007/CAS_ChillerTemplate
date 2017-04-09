# CAS_ChillerTemplate 

create chart:

var xsval={};
xsval["layout"]="x1";
var colval=[];
colval.push(['x1',$scope.facilities[0].fwidth,800,0,0]);
colval.push(['layout',$scope.facilities[0].flength,0,0,$scope.facilities[0].flength]);
for (  equip in $scope.facilities[0].equipment)
        {
            var e = $scope.facilities[0].equipment[equip];
            xsval[e.equipmentname]=(e.equipmentname+"x");
            colval.push([e.equipmentname+"x",e.locationx]);
            colval.push([e.equipmentname,e.locationy]);
        };
$scope.chart = c3.generate({
        bindto: '#chart',
        data: {
            xs:xsval,
            columns:colval,
        },
        axis: {
            y: {
                max:400,
                min: 0,
                 padding: {top:0, bottom:0}
            },
            x:{
                max:800,
                min: 0,
                 padding: {top:0, bottom:0}
            }

        },
        grid: {
            x: {
                show: true
            },
            y: {
                show: true
            }
        },
    size: {
        height: 240,
        width: 500
    },

    });

different layout based on screen width:
<style type="text/css">
            @media only screen
and (min-device-width : 640px)
 {
#dd{
    visibility: hidden;
}
            }

            @media  only screen and (max-device-width : 639px) {
                body {
                    background-color: #00ff00;

                }
                #dd2{
    visibility: hidden;
}
            }
        </style>
