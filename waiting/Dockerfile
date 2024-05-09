<<<<<<< HEAD:waiting/Dockerfile
# # 빌드 관련
=======
# 빌드 관련
>>>>>>> ccf5a786b51751e935d64e7e563acbe2d9a584dd:user/Dockerfile
FROM openjdk:17-alpine

CMD ["./gradlew", "clean", "build"]

VOLUME /tmp

<<<<<<< HEAD:waiting/Dockerfile
# # 만들어진 jar파일 복사
COPY build/libs/*.jar wating.jar

# # 실행할 명령어
# # ENTRYPOINT ["java", "-jar", "user.jar" ,"--spring.profiles.active=prod"]

ENTRYPOINT ["java", "-jar", "wating.jar" , "--spring.profiles.active=k8s"]



=======
# 만들어진 jar파일 복사
COPY build/libs/*.jar user.jar

# 실행할 명령어
ENTRYPOINT ["java", "-jar", "user.jar", "--spring.profiles.active=prod"]
>>>>>>> ccf5a786b51751e935d64e7e563acbe2d9a584dd:user/Dockerfile
