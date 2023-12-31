package com.aviacharter.server.dto.client;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientNoOrderDataResponseDto {

    private Long id;
    private String clientName;
    private String telephoneNumber;
    private String email;
    private String birthday;
    private String additionalInfo;

    private Long passportId;

    @Override
    public String toString() {
        return "ClientNoOrderDataResponseDto{" +
                "id=" + id +
                ", clientName='" + clientName + '\'' +
                ", telephoneNumber='" + telephoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", birthday='" + birthday + '\'' +
                ", additionalInfo='" + additionalInfo + '\'' +
                ", passportId=" + passportId +
                '}';
    }
}
