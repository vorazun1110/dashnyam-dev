import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define neobrutalist styles - compact for 2 pages
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fefce8", // yellow-50
    padding: 15,
    fontFamily: "Courier",
    fontSize: 8,
  },
  header: {
    border: "3 solid black",
    backgroundColor: "#fde047", // yellow-400
    padding: 12,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 3,
  },
  contact: {
    fontSize: 8,
    color: "black",
    marginTop: 2,
  },
  section: {
    marginBottom: 10,
    border: "2 solid black",
    padding: 8,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    marginBottom: 6,
    borderBottom: "2 solid black",
    paddingBottom: 3,
  },
  experienceItem: {
    marginBottom: 8,
    border: "2 solid black",
    padding: 6,
    backgroundColor: "#fefce8",
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "black",
  },
  company: {
    fontSize: 9,
    fontWeight: "bold",
    color: "black",
  },
  period: {
    fontSize: 8,
    color: "black",
    backgroundColor: "white",
    padding: "2 5",
    border: "2 solid black",
  },
  bullet: {
    fontSize: 8,
    color: "black",
    marginBottom: 2,
    marginLeft: 8,
    lineHeight: 1.3,
  },
  projectItem: {
    marginBottom: 6,
    border: "2 solid black",
    padding: 6,
    backgroundColor: "#fefce8",
  },
  projectName: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    marginBottom: 2,
  },
  projectDesc: {
    fontSize: 7,
    color: "black",
    marginBottom: 2,
    lineHeight: 1.2,
  },
  projectStack: {
    fontSize: 7,
    color: "black",
    fontStyle: "italic",
  },
  skillGroup: {
    marginBottom: 6,
    border: "2 solid black",
    padding: 6,
    backgroundColor: "#fefce8",
  },
  skillLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
    marginBottom: 3,
  },
  skillItem: {
    fontSize: 7,
    color: "black",
    marginBottom: 1,
    marginLeft: 8,
  },
  highlightBox: {
    border: "2 solid black",
    padding: 8,
    backgroundColor: "#60a5fa", // blue-400
    marginBottom: 10,
  },
  highlightText: {
    fontSize: 8,
    color: "black",
    marginBottom: 2,
    fontWeight: "bold",
    lineHeight: 1.3,
  },
  twoColumn: {
    flexDirection: "row",
    gap: 8,
  },
  column: {
    flex: 1,
  },
  summaryText: {
    fontSize: 8,
    color: "black",
    lineHeight: 1.3,
  },
});

interface ResumeData {
  name: string;
  title: string;
  location: string;
  summary: string;
  highlights: string[];
  experience: Array<{
    title: string;
    place: string;
    period: string;
    bullets: string[];
  }>;
  education: Array<{
    title: string;
    place: string;
    period: string;
    bullets: string[];
  }>;
  projects: Array<{
    name: string;
    summary: string;
    stack: string;
  }>;
  skills: Array<{
    label: string;
    items: Array<{ name: string; experience: string }>;
  }>;
  contact: {
    email: string;
  };
}

export const ResumePDF = ({ data }: { data: ResumeData }) => (
  <Document>
    {/* Page 1 */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.contact}>{data.location} • {data.contact.email.replace("mailto:", "")}</Text>
      </View>

      {/* Summary & Highlights Combined */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SUMMARY</Text>
        <Text style={styles.summaryText}>{data.summary}</Text>
        <View style={{ marginTop: 6, padding: 6, border: "2 solid black", backgroundColor: "#60a5fa" }}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "black", marginBottom: 4 }}>KEY HIGHLIGHTS</Text>
          {data.highlights.map((highlight, idx) => (
            <Text key={idx} style={styles.highlightText}>• {highlight}</Text>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
        {data.experience.map((exp, idx) => (
          <View key={idx} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.jobTitle}>{exp.title}</Text>
                <Text style={styles.company}>{exp.place}</Text>
              </View>
              <Text style={styles.period}>{exp.period}</Text>
            </View>
            {exp.bullets.map((bullet, bIdx) => (
              <Text key={bIdx} style={styles.bullet}>• {bullet}</Text>
            ))}
          </View>
        ))}
      </View>
    </Page>

    {/* Page 2 */}
    <Page size="A4" style={styles.page}>
      {/* Projects & Skills Side by Side */}
      <View style={styles.twoColumn}>
        <View style={[styles.column, styles.section]}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          {data.projects.map((project, idx) => (
            <View key={idx} style={styles.projectItem}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDesc}>{project.summary}</Text>
              <Text style={styles.projectStack}>{project.stack}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.column, styles.section]}>
          <Text style={styles.sectionTitle}>SKILLS</Text>
          {data.skills.map((group, idx) => (
            <View key={idx} style={styles.skillGroup}>
              <Text style={styles.skillLabel}>{group.label}</Text>
              {group.items.map((item, itemIdx) => (
                <Text key={itemIdx} style={styles.skillItem}>• {item.name} ({item.experience})</Text>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {data.education.map((edu, idx) => (
          <View key={idx} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.jobTitle}>{edu.title}</Text>
                <Text style={styles.company}>{edu.place}</Text>
              </View>
              <Text style={styles.period}>{edu.period}</Text>
            </View>
            {edu.bullets.map((bullet, bIdx) => (
              <Text key={bIdx} style={styles.bullet}>• {bullet}</Text>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

