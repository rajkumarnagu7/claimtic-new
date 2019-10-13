import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: 'calendar.page.html',
  styleUrls: ['calendar.page.scss']
})
export class CalendarPage {
  events:any;
  startDate:any;
  endDate:any;
  responce=[
    {
        "id": "25001",
        "is_active": "1",
        "username": "MTC-tester",
        "password": "769467a55d7bb27004184d970fbc4224",
        "email": "mtcronin@hotmail.com",
        "first_name": "TEST",
        "last_name": "Michael",
        "phone": "(210) 360-1400",
        "phone_ext": null,
        "mobile_phone": null,
        "fax": null,
        "other": null,
        "roles": "[\"ROLE_ADMIN\"]",
        "title": "VP of Software Dev",
        "designation": null,
        "payroll_id": "0",
        "payroll_type": "1",
        "is_w2": "0",
        "is_hourly": "0",
        "contract_id": "0",
        "background_check": "2019-02-02 00:00:00",
        "cust_id": null,
        "cust_access_level": "0",
        "xact_address": null,
        "symbility_address": null,
        "supervisor_id": null,
        "city": "San Antonio",
        "state_id": "43",
        "zip": "78209",
        "address": "5631 Broadway",
        "other_phone": null,
        "notes": null,
        "ssn_ein": "21fa7ca75bd244897e5a496cbf04c651",
        "signature": null,
        "allow_mailers": "1",
        "adjuster_available": "1",
        "resume_review": "1",
        "resource_type_id": "2",
        "service_expense_rate": "0",
        "zero_commission": "0",
        "xactimate_exp": "0",
        "xact_analysis_exp": "0",
        "symbility_exp": "0",
        "property_exp": "0",
        "structure_type": "0",
        "military_exp": "0",
        "military_branch": null,
        "work_radius": "1",
        "rope_harness_cert": "0",
        "storm_list": null,
        "company_list": null,
        "software_list": null,
        "signature_text": null,
        "last_activity_at": "2019-10-12 13:19:43",
        "latitude": "17.4450329",
        "longitude": "78.4420217",
        "activation_key": null,
        "activation_timestamp": "2019-02-02 08:08:56",
        "password_reset_token": "cd262769582645fd0427e4ea48c373c65184",
        "daily_limit": "0",
        "weekly_limit": "0",
        "last_assigned": "0",
        "num_per_page": "10",
        "resource_num": null,
        "external_resource_id": null,
        "use_reserves": "0",
        "last_template_assigned": null,
        "stateCode": "TX",
        "stateName": "Texas",
        "supervisor_first_name": null,
        "supervisor_last_name": null,
        "supervisor_username": null,
        "supervisor_email": null,
        "Certificates": [],
        "Licenses": [
            {
                "licenseNum": "23423423",
                "licenseDate": "2019-07-01 00:00:00",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            }
        ],
        "Events": [
            {
                "id": "2043",
                "startDate": "2019-09-14 00:00:00",
                "endDate": "2019-09-14 15:54:00",
                "event_type": "1",
                "event_desc": "vacation",
                "entryDate": "2019-09-12 06:52:24",
                "resource_id": "25001",
                "calendar_event_type": "Vacation",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2055",
                "startDate": "2019-09-19 06:33:00",
                "endDate": "2020-09-19 06:33:00",
                "event_type": "2",
                "event_desc": "Test",
                "entryDate": "2019-09-19 01:34:09",
                "resource_id": "25001",
                "calendar_event_type": "Sick",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2067",
                "startDate": "2019-09-27 11:27:00",
                "endDate": "2019-09-30 23:30:00",
                "event_type": "1",
                "event_desc": "test",
                "entryDate": "2019-09-27 06:27:01",
                "resource_id": "25001",
                "calendar_event_type": "Vacation",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2077",
                "startDate": "2019-09-30 14:59:00",
                "endDate": "2019-11-30 15:59:00",
                "event_type": "1",
                "event_desc": "test",
                "entryDate": "2019-09-30 10:00:07",
                "resource_id": "25001",
                "calendar_event_type": "Vacation",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2093",
                "startDate": "2019-10-03 06:36:00",
                "endDate": "2019-10-05 06:41:00",
                "event_type": "2",
                "event_desc": "test",
                "entryDate": "2019-10-03 01:35:19",
                "resource_id": "25001",
                "calendar_event_type": "Sick",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2095",
                "startDate": "2019-10-04 06:55:00",
                "endDate": "2019-10-05 06:59:00",
                "event_type": "2",
                "event_desc": "test2",
                "entryDate": "2019-10-03 01:55:39",
                "resource_id": "25001",
                "calendar_event_type": "Sick",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2103",
                "startDate": "2019-10-09 00:00:00",
                "endDate": "2019-10-11 07:22:00",
                "event_type": "3",
                "event_desc": "test",
                "entryDate": "2019-10-09 02:07:45",
                "resource_id": "25001",
                "calendar_event_type": "Other",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2105",
                "startDate": "2019-10-09 09:56:00",
                "endDate": "2019-10-10 00:40:00",
                "event_type": "1",
                "event_desc": "tester",
                "entryDate": "2019-10-09 02:30:18",
                "resource_id": "25001",
                "calendar_event_type": "Vacation",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2107",
                "startDate": "2019-10-09 19:00:00",
                "endDate": "2019-10-10 19:20:00",
                "event_type": "2",
                "event_desc": "vacation",
                "entryDate": "2019-10-09 08:33:08",
                "resource_id": "25001",
                "calendar_event_type": "Sick",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2109",
                "startDate": "2019-10-10 19:00:00",
                "endDate": "2019-10-11 19:20:00",
                "event_type": "2",
                "event_desc": "vacation",
                "entryDate": "2019-10-10 03:39:59",
                "resource_id": "25001",
                "calendar_event_type": "Sick",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2111",
                "startDate": "2019-10-10 19:00:00",
                "endDate": "2019-10-11 19:20:00",
                "event_type": "2",
                "event_desc": "vacation",
                "entryDate": "2019-10-10 03:40:25",
                "resource_id": "25001",
                "calendar_event_type": "Sick",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2117",
                "startDate": "2019-10-10 00:00:00",
                "endDate": "2019-10-17 00:00:00",
                "event_type": "2",
                "event_desc": "tester20",
                "entryDate": "2019-10-10 07:12:17",
                "resource_id": "25001",
                "calendar_event_type": "Sick",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2121",
                "startDate": "2019-10-11 00:00:00",
                "endDate": "2019-10-12 00:00:00",
                "event_type": "3",
                "event_desc": "test123",
                "entryDate": "2019-10-11 01:24:28",
                "resource_id": "25001",
                "calendar_event_type": "Other",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2127",
                "startDate": "2019-10-11 11:58:00",
                "endDate": "2019-10-16 15:58:00",
                "event_type": "1",
                "event_desc": "teset",
                "entryDate": "2019-10-11 06:58:25",
                "resource_id": "25001",
                "calendar_event_type": "Vacation",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            },
            {
                "id": "2129",
                "startDate": "2019-10-12 00:00:00",
                "endDate": "2019-10-13 00:00:00",
                "event_type": "1",
                "event_desc": "tester",
                "entryDate": "2019-10-12 12:05:59",
                "resource_id": "25001",
                "calendar_event_type": "Vacation",
                "resource_name": "TEST Michael",
                "resource_username": "MTC-tester"
            }
        ]
    }
  ]
  list={
    startDate:"10/03/2019",
    actualend_date:"10/03/2019",
    calendar_event_type:"Vacation",
    event_desc:"Test",
  }
  constructor(private router:Router,
    private apiService:ApiService) {
    
    console.log('EventsPage::constructor() | method called');
    this.loadEvents(true);
 }

    ionViewDidEnter(){
      console.log('EventsPage::ionViewDidEnter() | method called');
      this.loadEvents(false);
    }

  addEventPage(){
    this.router.navigate(['addevent']);
  }

  loadEvents(refresh = false, refresher?) {
    this.apiService.getEvents(refresh).subscribe(res => {
      console.log(res);
      if(res!=null){
      // this.events = this.responce[0].Events;
      //  var startDate=this.events[0].startDate;
      //  var endDate=this.events[0].endDate;
      //  // var nowStartDate=new Date(startDate);
      //   //var nowendDate=new Date(endDate);
      //   this.startDate=moment(startDate).format('MM/DD/YYYY');
      //   this.endDate=moment(endDate).format('MM/DD/YYYY');

      //   console.log("new events"+this.startDate+this.endDate);
      //   console.log('Events'+this.events);
        var eventsSort = res[0].Events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
        var resversesort =eventsSort.reverse();
        this.events=resversesort;
        console.log("revserse"+JSON.stringify(resversesort));
        console.log('EventsSort'+JSON.stringify(eventsSort));
      } 
      else{
        this.events = null;
      }
      if (refresher) {
        refresher.target.complete();
      }
    });
  }
}
