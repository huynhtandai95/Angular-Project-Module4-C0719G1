import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users;
  numberOfUser;
  numberOfPage;
  numberOfUserOfResultFind;
  numberOfPageOfResultFind;
  paginationArrays = [];
  paginationArraysOfResultFind;
  selectedPage = 1;
  selectedPageOfResultFind = 1;
  backgroundColorOfSelectedPage = { backgroundColor: 'rgb(74, 113, 145)' };
  backgroundColorOfNotSelectedPage = {};
  keyWordForFindUser;
  resultFindUser = null;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data.data;
      console.log(this.users);
    })

    this.userService.getNumberOfUsers().subscribe(data => {
      this.numberOfUser = data;
      this.numberOfPage = Math.ceil(this.numberOfUser / 3);
      for (var i = 1; i <= this.numberOfPage; i++) {
        this.paginationArrays.push(i);
      }
      console.log(this.paginationArrays);
    })
  }

  goToPageOfNumber(pageNumber) {
    this.userService.goToPageOfNumber(pageNumber).subscribe(data => {
      this.users = data.data;
    })
    this.selectedPage = pageNumber;
  }

  goToPreviousPage() {
    if (this.selectedPage != 1) {
      this.selectedPage = this.selectedPage - 1;
      this.userService.goToPageOfNumber(this.selectedPage).subscribe(data => {
        this.users = data.data;
      })
    }
  }

  goToNextPage() {
    if (this.selectedPage != this.numberOfPage) {
      this.selectedPage = this.selectedPage + 1;
      this.userService.goToPageOfNumber(this.selectedPage).subscribe(data => {
        this.users = data.data;
      })
    }
  }

  findUser() {
    var conditionForFindUser = {
      "keyWordForFindUser": this.keyWordForFindUser
    };
    this.userService.findUser(conditionForFindUser).subscribe(data => {
      console.log(data);
      this.numberOfUserOfResultFind = data[0];
      console.log(this.numberOfUserOfResultFind);
      this.numberOfPageOfResultFind = Math.ceil(this.numberOfUserOfResultFind / 3);
      console.log(this.numberOfPageOfResultFind);
      this.resultFindUser = data[1].data;
      this.users = this.resultFindUser;
      console.log(this.resultFindUser);
      this.paginationArraysOfResultFind = [];
      for (var i = 1; i <= this.numberOfPageOfResultFind; i++) {
        this.paginationArraysOfResultFind.push(i);
      }
      console.log(this.paginationArraysOfResultFind);
    })
  }

  goToPageOfNumberOfResultFind(paginate) {
    var conditionForFindUser = {
      "keyWordForFindUser": this.keyWordForFindUser
    };
    this.userService.goToPageOfNumberOfResultFind(paginate, conditionForFindUser).subscribe(data => {
      this.resultFindUser = data[1].data;
      this.users = this.resultFindUser;
    })
    this.selectedPageOfResultFind = paginate;
  }

  goToPreviousPageOfResultFind() {
    if (this.selectedPageOfResultFind != 1) {
      this.selectedPageOfResultFind = this.selectedPageOfResultFind - 1;
      var conditionForFindUser = {
        "keyWordForFindUser": this.keyWordForFindUser
      };
      this.userService.goToPageOfNumberOfResultFind(this.selectedPageOfResultFind, conditionForFindUser).subscribe(data => {
        this.resultFindUser = data[1].data;
        this.users = this.resultFindUser;
      })
    }
  }

  goToNextPageOfResultFind() {
    if (this.selectedPageOfResultFind != this.numberOfPageOfResultFind) {
      this.selectedPageOfResultFind = this.selectedPageOfResultFind + 1;
      var conditionForFindUser = {
        "keyWordForFindUser": this.keyWordForFindUser
      };
      this.userService.goToPageOfNumberOfResultFind(this.selectedPageOfResultFind, conditionForFindUser).subscribe(data => {
        this.resultFindUser = data[1].data;
        this.users = this.resultFindUser;
      })
    }
  }


  backToListUser() {
    this.resultFindUser = null;
    this.paginationArrays = [];
    this.ngOnInit();
  }
}
