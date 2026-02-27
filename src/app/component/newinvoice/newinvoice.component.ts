import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newinvoice',
  standalone: false,
  templateUrl: './newinvoice.component.html',
  styleUrl: './newinvoice.component.css',
})
export class NewinvoiceComponent {
  billForm!: FormGroup;
  currentTime!: string;
  private timeInterval: any;
  totalDiscount: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Set the initial date and time
    const now = new Date();
    const formattedDate = now.toISOString().substring(0, 10); // yyyy-mm-dd
    this.currentTime = now.toLocaleTimeString(); // hh:mm:ss AM/PM

    // Initialize the form group
    this.billForm = this.fb.group({
      date: [formattedDate, Validators.required],
      time: [this.currentTime],
      customerName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)],
      ],
      customerNumber: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      ],
      customerAddress: ['', Validators.required],
      products: this.fb.array([this.createProductGroup()]),
      total: [{ value: '', disabled: true }],
      totalDiscount: [{ value: 0, disabled: true }],
    });

    // Start the timer to update the time every second
    this.startTimer();
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    clearInterval(this.timeInterval);
  }

  startTimer() {
    this.timeInterval = setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      this.billForm.patchValue({
        time: this.currentTime,
      });
    }, 1000); // Update every second
  }

  get products(): FormArray {
    return this.billForm.get('products') as FormArray;
  }

  createProductGroup(): FormGroup {
    return this.fb.group({
      productName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      shopRate: [1, [Validators.required, Validators.min(1)]],
      mrp: [0],
      discount: [0],
    });
  }

  // Calculate total price and discount
  calculateTotal(i: number) {
    const product = this.products.at(i);
    const mrp = product.get('mrp')?.value;
    const shopRate = product.get('shopRate')?.value;
    const discount = product.get('discount')?.value;

    // If discount is not provided or is 0, calculate it as MRP - Shop Rate
    const calculatedDiscount = discount > 0 ? discount : mrp - shopRate;
    product.patchValue({
      discount: calculatedDiscount,
    });

    this.calculateTotalAmount();
  }

  calculateTotalAmount(): void {
    let totalAmount = 0;
    let totalDiscount = 0;

    this.products.controls.forEach((group) => {
      const quantity = +group.get('quantity')?.value || 0;
      const shopRate = +group.get('shopRate')?.value || 0;
      const mrp = +group.get('mrp')?.value || 0;
      let discount = +group.get('discount')?.value || 0;

      // Total values
      const totalShopRate = quantity * shopRate;
      const totalMRP = quantity * mrp;

      // If discount is not manually provided, compute it as (totalMRP - totalShopRate)
      if (!discount) {
        discount = totalMRP - totalShopRate;
      } else {
        discount += totalMRP - totalShopRate;
      }

      // Ensure the discount field in the form is up-to-date (optional)
      group.get('discount')?.setValue(discount);

      totalAmount += totalShopRate;
      totalDiscount += discount;
    });

    this.totalDiscount = totalDiscount;
    this.billForm.get('total')?.setValue(totalAmount.toFixed(2));
    this.billForm.get('totalDiscount')?.setValue(this.totalDiscount.toFixed(2));
  }





  addProduct(): void {
    this.products.push(this.createProductGroup());
  }

  removeProduct(index: number): void {
    this.products.removeAt(index);
    this.calculateTotalAmount(); // Recalculate totals after removing a product
  }

  onSubmit(): void {
    if (this.billForm.valid) {
      console.log(this.billForm.value);
      // API logic here
    }
  }
}
