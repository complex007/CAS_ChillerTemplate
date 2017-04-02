/**
 * Created by apple on 1/4/17.
 */

angular.module('CASChillerApp')
    .constant("serviceURL", "http://192.168.95.185/CASChillerSystem/api/")
    .service('facilityService', ['$resource', 'serviceURL', function ($resource, serviceURLL) {


        this.facilityinfo=[
            {
                "id":1,
            "facilityname":"facility1",
            "equipment":[
                {"equipmentname":"CNC1",
                    "equipmenttype":"injectionmachine"
                },
                {"equipmentname":"CNC2",
                    "equipmenttype":"injectionmachine"}
            ],
        },
        {
             "id":2,
            "facilityname":"facility2",
            "equipment":[
                {"equipmentname":"CNC3",
                    "equipmenttype":"injectionmachine"
                },
                {"equipmentname":"CNC4",
                    "equipmenttype":"injectionmachine"}
            ],
        }
        ];
    }])


    ;
