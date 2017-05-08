module IcalendarHelpers
  def ical_datetime_to_stamp(input_datetime)
    input_datetime.getutc.strftime("%Y%m%dT%H%M%SZ")
  end

  def ical_format_description(event_description)
    event_description.gsub(/\n/, '\n')
  end

  def ical_generate_uid(event)
    "#{ical_datetime_to_stamp(event.start)}@big-burrito.com"
  end
end
