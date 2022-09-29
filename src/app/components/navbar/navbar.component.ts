import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    subscription: Subscription = new Subscription();
    menu: Menu[] = [];

    constructor(private menuService: MenuService, private router: Router) {}

    ngOnInit(): void {
        this.loadMenu();
    }

    loadMenu() {
        this.subscription.add(
            this.menuService.getMenu().subscribe((data) => {
                this.menu = data;
            })
        );
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/logout']);
    }

    ngDestroy() {
        this.subscription.unsubscribe();
    }
}
