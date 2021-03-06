import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemDetailPage } from './../../pages/item-detail/item-detail.page';
import { CartService } from './../../services/cart.service';

@Component({
	selector: 'app-menu-items',
	templateUrl: './menu-items.component.html',
	styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {
	@Input() menuItems: any;

	constructor(
		private cart: CartService,
		private modalController: ModalController
	) {}

	// Does not show the model if the add-button is not clicked
	async showItemDetail(event, menuItem) {
		if (!event.target.className.includes('add-button')) {
			const modal = await this.modalController.create({
				component: ItemDetailPage,
				componentProps: {
					item: menuItem
				},
				cssClass: 'pop-up-modal'
			});
			return await modal.present();
		}
	}
}
