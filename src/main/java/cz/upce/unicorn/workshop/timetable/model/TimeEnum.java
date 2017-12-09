package cz.upce.unicorn.workshop.timetable.model;

public enum TimeEnum {
    H_7("07:00 - 07:45"),
    H_8("08:00 - 08:45"),
    H_9("09:00 - 09:45"),
    H_10("10:00 - 10:45"),
    H_11("11:00 - 11:45"),
    H_12("12:00 - 12:45"),
    H_13("13:00 - 13:45"),
    H_14("14:00 - 14:45"),
    H_15("15:00 - 15:45"),
    H_16("16:00 - 16:45"),
    H_17("17:00 - 17:45"),
    H_18("18:00 - 18:45");

    private String timeLabel;

    TimeEnum(String timeLabel) {
        this.timeLabel = timeLabel;
    }

    public String getTimeLabel() {
        return timeLabel;
    }
}
