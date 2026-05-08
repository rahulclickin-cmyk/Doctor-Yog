import { jsPDF } from 'jspdf';

export interface BrochureData {
  title: string;
  subtitle: string;
  doctorName: string;
  date: string;
  description: string;
  highlights: string[];
  idealFor: string[];
  curriculum: { title: string; topics: string[] }[];
  schedule: { time: string; activity: string }[];
  dailyProgram: { day: string; topics: string[] }[];
  outcomes: string[];
  fee: {
    full: string;
    earlyBird: string;
    registration: string;
  };
}

export const generateBrochure = (data: BrochureData) => {
  const doc = jsPDF();
  let y = 20;
  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - 2 * margin;

  // Helper to add text and update Y
  const addText = (text: string, size = 12, style = 'normal', color = [0, 0, 0]) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', style);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, contentWidth);
    
    // Check for page break
    if (y + (lines.length * (size / 2)) > doc.internal.pageSize.getHeight() - 20) {
      doc.addPage();
      y = 20;
    }
    
    doc.text(lines, margin, y);
    y += (lines.length * (size / 2)) + 5;
  };

  // Header
  addText(data.title.toUpperCase(), 18, 'bold', [234, 88, 12]); // Primary color orange-600
  addText(data.subtitle, 14, 'bold', [71, 85, 105]);
  addText(`With ${data.doctorName}`, 12, 'italic', [71, 85, 105]);
  addText(`Date: ${data.date}`, 12, 'bold', [234, 88, 12]);
  
  y += 5;
  addText(data.description, 11);
  
  y += 5;
  addText('TRAINING HIGHLIGHTS', 14, 'bold', [15, 23, 42]);
  data.highlights.forEach(h => addText(`• ${h}`, 10));
  
  y += 5;
  addText('IDEAL FOR', 14, 'bold', [15, 23, 42]);
  data.idealFor.forEach(i => addText(`• ${i}`, 10));

  doc.addPage();
  y = 20;
  addText('COURSE CURRICULUM', 16, 'bold', [234, 88, 12]);
  data.curriculum.forEach(c => {
    addText(c.title, 12, 'bold', [15, 23, 42]);
    c.topics.forEach(t => addText(` - ${t}`, 10));
    y += 2;
  });

  doc.addPage();
  y = 20;
  addText('DAILY TIME SCHEDULE', 16, 'bold', [234, 88, 12]);
  data.schedule.forEach(s => {
    addText(`${s.time}: ${s.activity}`, 11);
  });

  y += 5;
  addText('11-DAY TRAINING PROGRAM', 16, 'bold', [234, 88, 12]);
  data.dailyProgram.forEach(d => {
    addText(d.day, 12, 'bold', [15, 23, 42]);
    d.topics.forEach(t => addText(` • ${t}`, 10));
    y += 2;
  });

  doc.addPage();
  y = 20;
  addText('OUTCOME OF THE TRAINING', 16, 'bold', [234, 88, 12]);
  data.outcomes.forEach(o => addText(`• ${o}`, 11));

  y += 10;
  addText('COURSE FEE', 16, 'bold', [234, 88, 12]);
  addText(`Full Program Fee: ${data.fee.full}`, 12, 'bold');
  addText(`Early Bird Offer: ${data.fee.earlyBird}`, 12, 'bold', [234, 88, 12]);
  addText(`Registration Fee: ${data.fee.registration}`, 11);

  addText('\nLimited seats available. Book your spot today!', 12, 'italic', [71, 85, 105]);

  doc.save('DoctorYog_Training_Brochure.pdf');
};
