export class ToolTipService {
  private tooltips: any[] = [];

  add(tooltip: any) {
    // add tooltip to array of active tooltips
    this.tooltips.push(tooltip);
  }

  remove(id: string) {
    // remove tooltip from array of active tooltips
    this.tooltips = this.tooltips.filter(x => x.id !== id);
  }

  open(id: string) {
    // open tooltip specified by id
    this.tooltips.filter(x => x.id !== id).forEach((ids) => ids.close());
    let tooltip: any = this.tooltips.filter(x => x.id === id)[0];
    tooltip.open();
  }

  close(id: string) {
    // close tooltip specified by id
    let tooltip: any = this.tooltips.filter(x => x.id === id)[0];
    tooltip.close();
  }
}
